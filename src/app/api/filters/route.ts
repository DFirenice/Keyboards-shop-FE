import { NextResponse } from 'next/server'

// Mock response data
const data = {
  mouse: {
    brand: ["Logitech", "Razer", "Corsair", "SteelSeries", "Glorious"],
    dpi: ["800", "1600", "3200", "6400", "16000+"],
    connection: ["Wired", "Wireless", "Bluetooth"],
    sensorType: ["Optical", "Laser"],
    weight: ["<80g", "80–100g", "100–120g", "120g+"],
  },
  keyboard: {
    brand: ["Logitech", "Razer", "Keychron", "Corsair", "Ducky"],
    switchType: ["Red (Linear)", "Blue (Clicky)", "Brown (Tactile)", "Silent", "Optical"],
    connection: ["Wired", "Wireless", "Bluetooth"],
    layout: ["60%", "75%", "TKL", "Full-size"],
    backlight: ["RGB", "White", "None"],
  },
  microphone: {
    brand: ["Blue", "Elgato", "Rode", "HyperX", "Shure"],
    type: ["Condenser", "Dynamic"],
    connection: ["USB", "XLR"],
    pickupPattern: ["Cardioid", "Omnidirectional", "Bidirectional", "Stereo"],
    features: ["Mute Button", "Shock Mount Included", "Pop Filter Included"],
  },
  headphone: {
    brand: ["Sony", "Audio-Technica", "Razer", "Corsair", "HyperX"],
    type: ["Over-Ear", "On-Ear", "In-Ear"],
    connection: ["Wired", "Wireless", "Bluetooth"],
    noiseCancellation: ["Active", "Passive", "None"],
    microphone: ["With Mic", "Without Mic"],
  },
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get("category") as keyof typeof data
    
    if (!category || !data[category]) {
        return NextResponse.json({
            success: false,
            error: 'Invalid category'
        }, { status: 400 })
    }

    return NextResponse.json({
        category,
        filters: data[category]
    })
}