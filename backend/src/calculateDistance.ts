export const calculateDistance = (longLoc: number, latLoc: number, longDriver: number, latDriver: number) => {
  const lon_1 = longDriver * Math.PI / 180
  const lon_2 = longLoc * Math.PI / 180
  const lat_1 = latDriver * Math.PI / 180
  const lat_2 = latLoc * Math.PI / 180
  // Haversine formula
  const dLon = lon_2 - lon_1
  const dLat = lat_2 - lat_1
  const a = Math.pow(Math.sin(dLat / 2), 2) +
                 Math.cos(lat_1) * Math.cos(lat_2) *
                 Math.pow(Math.sin(dLon / 2), 2)
  const c = 2 * Math.asin(Math.sqrt(a))
  // Radius of earth in kilometers. Use 3956
  // for miles
  const r = 6371
  // calculate the result
  return (c * r)
}
