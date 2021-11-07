import type { ComponentRegistrarListener } from '@/types/ComponentRegistrarListener'
import React from 'react'

interface RegisterComponentListenerOptions {
  appName: string
  eventName: string
}

export class RegisterComponentListener implements ComponentRegistrarListener {
  private appName: string
  private eventName: string

  private listenerInstance: any

  constructor(options?: RegisterComponentListenerOptions) {
    this.appName = options?.appName || 'MyApp'
    this.eventName = options?.eventName || 'registerComponent'

    this.exposeRegistration()
  }

  public addEventListener(callback: (aSection: string, theComponent: any) => void) {
    this.initializeListener(callback)
    document.addEventListener(this.eventName, this.listenerInstance)
  }

  public removeEventListener() {
    document.removeEventListener(this.eventName, this.listenerInstance)
    this.listenerInstance = null
  }

  private initializeListener(callback: (aSection: string, theComponent: any) => void) {
    this.listenerInstance = (event: CustomEvent) => {
      const [sectionName, sectionComponent] = event.detail
      callback(sectionName, sectionComponent)
    }
  }

  public exposeRegistration() {
    if (typeof window === 'undefined') {
      return
    }

    // @ts-ignore
    window[this.appName] = { React }
    // @ts-ignore
    window[this.appName].registerComponent = this.registerComponent.bind(this)
  }

  private registerComponent(aSection: string, theComponent: string) {
    const registerComponentEvent = new CustomEvent(this.eventName, { detail: [aSection, theComponent] })
    document.dispatchEvent(registerComponentEvent)
  }
}
