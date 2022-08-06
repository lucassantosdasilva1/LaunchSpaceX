export interface apiDTO {
    flight_number: number,
    mission_name: string,
    mission_id: [],
    upcoming: boolean,
    launch_year: number,
    launch_date_unix: number,
    launch_date_utc: string,
    launch_date_local: string,
    is_tentative: boolean,
    tentative_max_precision: string,
    tbd: boolean,
    launch_window: number,
    rocket: {
      rocket_id: string,
      rocket_name: string,
      rocket_type: string,
      first_stage: {
        cores: [
          {
            core_serial: string,
            flight: number,
            block: string,
            gridfins: boolean,
            legs: boolean,
            reused: boolean,
            land_success: string,
            landing_intent: boolean,
            landing_type: string,
            landing_vehicle: string
          }
        ]
      },
      second_stage: {
        block: number,
        payloads: [
          {
            payload_id: string,
            norad_id: [],
            reused: boolean,
            customers: [],
            nationality: string,
            manufacturer: string,
            payload_type: string,
            payload_mass_kg: number,
            payload_mass_lbs: number,
            orbit: string,
            orbit_params: {
              reference_system: string,
              regime: string,
              longitude: string,
              semi_major_axis_km: string,
              eccentricity: string,
              periapsis_km: number,
              apoapsis_km: number,
              inclination_deg: number,
              period_min: string,
              lifespan_years: string,
              epoch: string,
              mean_motion: string,
              raan: string,
              arg_of_pericenter: string,
              mean_anomaly: string
            }
          }
        ]
      },
      fairings: {
        reused: boolean,
        recovery_attempt: boolean,
        recovered: boolean,
        ship: string
      }
    },
    ships: [],
    telemetry: {
      flight_club: string
    },
    launch_site: {
      site_id: string,
      site_name: string,
      site_name_long: string
    },
    launch_success: boolean,
    launch_failure_details: {
      time: number,
      altitude: string,
      reason: string
    },
    links: {
      mission_patch: string,
      mission_patch_small: string,
      reddit_campaign: string,
      reddit_launch: string,
      reddit_recovery: string,
      reddit_media: string,
      presskit: string,
      article_link: string,
      wikipedia: string,
      video_link: string,
      youtube_id: string,
      flickr_images: []
    },
    details: string,
    static_fire_date_utc: string,
    static_fire_date_unix: number,
    timeline: {
      webcast_liftoff: number
    }
}