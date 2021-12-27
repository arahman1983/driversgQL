import drivers from '../data.json'
import { calculateDistance } from './calculateDistance'

export interface DriverList {
  EAT: number;
  id: number;
  name: string;
  currentLocation: {
      lat: number;
      lon: number;
  };
  averageSpeedKmPerHour: number;
  telephone: string;
}

export const resolvers = {
  Query: {
    helloWorld: () => 'Hello World!',
    getNearestDrivers : (_:undefined, variables: {longLoc:number, latLoc:number}):DriverList[] | undefined => {
      if(variables.longLoc && variables.latLoc){
        const driversList = drivers.map(driver => (
          {...driver, 
            EAT: calculateDistance(variables.longLoc,variables.latLoc,driver.currentLocation.lon,driver.currentLocation.lat)/driver.averageSpeedKmPerHour
          }
          )).filter(d => d.EAT > 0).sort((a,b) => a.EAT - b.EAT)
          //get the nearest 10 drivers
          return driversList.slice(0, 10)
        }else{
          return []
        }
      }
  }
}
