interface links {
  url: string;
  title: string;
  icon?: string;
}

interface hedLiner {
  icon: string;
  title: string;
  description: string;
}

interface VehicleSystems {
  propulsionSystem: {
    engine: string;
    transmission: string;
    exhaustSystem: string;
  };
  steeringSystem: {
    steeringWheel: string;
    powerSteering: string;
    steeringBox: string;
  };
  suspensionSystem: {
    shockAbsorbers: string;
    springs: string;
    controlArms: string;
  };
  brakeSystem: {
    discBrakes: string;
    drumBrakes: string;
    abs: string;
    stabilityControl: string;
  };
  electricalSystem: {
    battery: string;
    alternator: string;
    lightingSystem: string;
    infotainmentSystem: string;
  };
  fuelSystem: {
    fuelPump: string;
    injectors: string;
    fuelFilter: string;
  };
  climateControlSystem: {
    acCompressor: string;
    heatingSystem: string;
    airDistributors: string;
  };
  coolingSystem: {
    radiator: string;
    waterPump: string;
    thermostat: string;
  };
  wheelsAndTires: {
    tires: string;
    rims: string;
    suspension: string;
  };
  safetySystem: {
    airbags: string;
    seatBelts: string;
    stabilityAndTractionAssist: string;
  };
  tractionControlSystem: {
    tractionControl: string;
  };
  navigationEntertainmentSystem: {
    gps: string;
    entertainmentScreens: string;
  };
  visibilitySystem: {
    wipers: string;
    rainSensors: string;
    mirrors: string;
  };
  signalingCommunicationSystem: {
    turnSignals: string;
    emergencyLights: string;
  };
  speedControlSystem: {
    cruiseControl: string;
    adaptiveCruiseControl: string;
  };
  passiveSafetySystem: {
    bodyAndChassis: string;
    rolloverBars: string;
  };
  parkingSystem: {
    parkingSensors: string;
    parkingCameras: string;
    parkingAssist: string;
  };
  engineManagementSystem: {
    oxygenSensors: string;
    emissionsControlSystem: string;
  };
  antiTheftSystem: {
    immobilizer: string;
    securityAlarms: string;
  };
  airQualityControlSystem: {
    airFilters: string;
  };
}

const vehicleSystems: VehicleSystems = {
  propulsionSystem: {
    engine: "V6 3.5L Gasoline",
    transmission: "8-speed automatic",
    exhaustSystem: "Dual exhaust with catalytic converters",
  },
  steeringSystem: {
    steeringWheel: "Leather-wrapped steering wheel",
    powerSteering: "Electric power steering",
    steeringBox: "Rack-and-pinion steering",
  },
  suspensionSystem: {
    shockAbsorbers: "Hydraulic shock absorbers",
    springs: "Coil springs",
    controlArms: "Upper and lower control arms",
  },
  brakeSystem: {
    discBrakes: "Ventilated disc brakes (front and rear)",
    drumBrakes: "Drum brakes (rear)",
    abs: "Anti-lock Braking System (ABS)",
    stabilityControl: "Electronic Stability Program (ESP)",
  },
  electricalSystem: {
    battery: "12V AGM Battery",
    alternator: "150A Alternator",
    lightingSystem: "LED headlights, taillights, and interior lights",
    infotainmentSystem:
      "7-inch touchscreen with Apple CarPlay and Android Auto",
  },
  fuelSystem: {
    fuelPump: "Electric fuel pump",
    injectors: "Multi-point fuel injectors",
    fuelFilter: "Fuel filter located near the tank",
  },
  climateControlSystem: {
    acCompressor: "Compressor with R-134a refrigerant",
    heatingSystem: "Dual-zone automatic climate control",
    airDistributors: "Air vents with temperature control",
  },
  coolingSystem: {
    radiator: "Aluminum radiator",
    waterPump: "Electric water pump",
    thermostat: "Thermostat with variable temperature control",
  },
  wheelsAndTires: {
    tires: "205/55 R16 All-season tires",
    rims: "16-inch alloy rims",
    suspension: "Independent suspension with MacPherson struts",
  },
  safetySystem: {
    airbags: "Front, side, and curtain airbags",
    seatBelts: "3-point seat belts with pre-tensioners",
    stabilityAndTractionAssist: "Electronic Stability Control (ESC)",
  },
  tractionControlSystem: {
    tractionControl: "Traction control system (TCS)",
  },
  navigationEntertainmentSystem: {
    gps: "In-dash navigation system with real-time traffic updates",
    entertainmentScreens:
      "7-inch infotainment touchscreen with Bluetooth connectivity",
  },
  visibilitySystem: {
    wipers: "Rain-sensing wipers",
    rainSensors: "Built-in rain sensor for automatic activation",
    mirrors: "Heated side mirrors with power adjustment",
  },
  signalingCommunicationSystem: {
    turnSignals: "LED turn signals with automatic cancellation",
    emergencyLights:
      "Hazard warning lights with automatic activation in emergency situations",
  },
  speedControlSystem: {
    cruiseControl: "Adaptive cruise control with stop-and-go functionality",
    adaptiveCruiseControl: "Adaptive cruise control with lane-keeping assist",
  },
  passiveSafetySystem: {
    bodyAndChassis: "Crash-resistant body and chassis with crumple zones",
    rolloverBars: "Integrated rollover protection bars",
  },
  parkingSystem: {
    parkingSensors: "Front and rear parking sensors",
    parkingCameras: "360-degree camera system",
    parkingAssist: "Automatic parking assist system",
  },
  engineManagementSystem: {
    oxygenSensors: "Oxygen sensors in the exhaust system",
    emissionsControlSystem:
      "Catalytic converter and EGR valve for emissions control",
  },
  antiTheftSystem: {
    immobilizer: "Electronic immobilizer with key fob recognition",
    securityAlarms: "Vehicle alarm system with remote panic button",
  },
  airQualityControlSystem: {
    airFilters: "Cabin air filter for pollutants and allergens",
  },
};
