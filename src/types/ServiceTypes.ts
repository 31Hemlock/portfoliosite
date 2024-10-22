import React from 'react';

export interface SimpleServiceInterface {
  url: string;
  color: string;
}

export interface SimpleServicesInterface {
  [key: string]: SimpleServiceInterface;
}

export interface ExtendedServiceInterface extends SimpleServiceInterface {
  content: React.ReactNode;
}

export interface ExtendedServicesInterface {
  [key: string]: ExtendedServiceInterface;
}
