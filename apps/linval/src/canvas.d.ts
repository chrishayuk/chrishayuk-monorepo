declare module "canvas" {
    export type Canvas = any;
    export type Context2d = any;
    export type CanvasRenderingContext2D = any;
    export type CanvasGradient = any;
    export type CanvasPattern = any;
    export type Image = any;
    export type ImageData = any;
    export type PNGStream = any;
    export type PDFStream = any;
    export type JPEGStream = any;
    export type DOMMatrix = any;
    export type DOMPoint = any;
  
    export function registerFont(...args: any[]): any;
    export function parseFont(...args: any[]): any;
  
    export function createCanvas(...args: any[]): any;
    export function createImageData(...args: any[]): any;
    export function loadImage(...args: any[]): any;
  
    export const backends: any;
  
    export const version: any;
    export const cairoVersion: any;
    export const jpegVersion: any;
    export const gifVersion: any;
    export const freetypeVersion: any;
  }