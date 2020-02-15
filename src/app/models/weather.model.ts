export class darkSky {
    latitude: number;
    longitude: number;
    timezone: string;
    currently: weatherCurrently;
    minutely: weatherMinutely;
    hourly: weatherHourly;
    daily: weatherDataDaily;
    flags: weatherFlags;
    offset: number;
}

export class weatherCurrently {
    time: number;
    summary: string;
    icon: string;
    nearestStormDistance: number;
    nearestStormBearing: number;
    precipIntensity: number;
    precipProbability: number;
    temperature: number;
    apparentTemperature: number;
    dewPoint: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windGust: number;
    windBearing: number;
    cloudCover: number;
    uvIndex: number;
    visibility: number;
    ozone: number;
}

export class weatherMinutely {
    summary: string;
    icon: string;
    data: weatherDataMinutely[] = [];

}

export class weatherDataMinutely {
    time: number;
    precipIntensity: number;
    precipProbability: number;
}
export class weatherDataHourly {
    time: number;
    summary: string;
    icon: string;
    precipIntensity: number;
    precipProbability: number;
    precipType: string;
    precipAccumulation: number;
    temperature: number;
    apparentTemperature: number;
    dewPoint: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windGust: number;
    windBearing: number;
    cloudCover: number;
    uvIndex: number;
    visibility: number;
    ozone: number;
}
export class weatherHourly {
    summary: string;
    icon: string;
    data: weatherDataHourly[] = [];
}
export class weatherDaily {
    summary: string;
    icon: string;
    data: weatherDataDaily[] = [];
}
export class weatherDataDaily {
    time: number;
    summary: string;
    icon: string;
    sunriseTime: number;
    sunsetTime: number;
    moonPhase: number;
    precipIntensity: number;
    precipIntensityMax: number;
    precipIntensityMaxTime: number;
    precipProbability: number;
    precipType: string;
    precipAccumulation: number;
    temperatureHigh: number;
    temperatureHighTime: number;
    temperatureLow: number;
    temperatureLowTime: number;
    apparentTemperatureHigh: number;
    apparentTemperatureHighTime: number;
    apparentTemperatureLow: number;
    apparentTemperatureLowTime: number;
    dewPoint: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windGust: number;
    windGustTime: number;
    windBearing: number;
    cloudCover: number;
    uvIndex: number;
    uvIndexTime: number;
    visibility: number;
    ozone: number;
    temperatureMin: number;
    temperatureMinTime: number;
    temperatureMax: number;
    temperatureMaxTime: number;
    apparentTemperatureMin: number;
    apparentTemperatureMinTime: number;
    apparentTemperatureMax: number;
    apparentTemperatureMaxTime: number;
}
export class weatherFlags {
    sources: string[] = [];
    nearestStation: number;
    units: string;
}