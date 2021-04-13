
export class CiraChannelFactory {
  factoryFn: (socket: any, port: any) => any
  constructor (factoryFn: (socket: any, port: any) => any) {
    this.factoryFn = factoryFn
  }

  getChannel (socket, port): any {
    return this.factoryFn(socket, port)
  }
}