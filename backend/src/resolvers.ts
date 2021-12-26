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
    getNearestDrivers : (longLoc:number, latLoc:number):DriverList[] => {
      const driversList = drivers.map(driver => (
        {...driver, 
          EAT: calculateDistance(longLoc,latLoc,driver.currentLocation.lon,driver.currentLocation.lat)/driver.averageSpeedKmPerHour
        }
        )).sort((a,b) => a.EAT - b.EAT)
        return driversList
      }
  }
}
