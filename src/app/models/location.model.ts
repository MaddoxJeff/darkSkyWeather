export class locationView {
    zip_code: number;
    lat: number;
    lng: number;
    city: string;
    state: string;
    timezone: timezoneView;
    acceptable_city_names: string[] = [];
    area_codes: number[] = [];
}

export class timezoneView {
    timezone_identifier: string;
    timezone_abbr: string;
    utc_offset_sec: number;
    is_dst: string;
}