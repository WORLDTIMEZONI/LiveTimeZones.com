// Get all supported time zones
const timeZones = Intl.supportedValuesOf('timeZone');

// Manual flag mappings for 150+ time zones
const timeZoneFlags = {
    // Africa (20)
    'Africa/Abidjan': '🇨🇮', 'Africa/Accra': '🇬🇭', 'Africa/Cairo': '🇪🇬', 'Africa/Casablanca': '🇲🇦',
    'Africa/Johannesburg': '🇿🇦', 'Africa/Nairobi': '🇰🇪', 'Africa/Lagos': '🇳🇬', 'Africa/Tunis': '🇹🇳',
    'Africa/Algiers': '🇩🇿', 'Africa/Addis_Ababa': '🇪🇹', 'Africa/Dakar': '🇸🇳', 'Africa/Khartoum': '🇸🇩',
    'Africa/Kampala': '🇺🇬', 'Africa/Mogadishu': '🇸🇴', 'Africa/Maputo': '🇲🇿', 'Africa/Tripoli': '🇱🇾',
    'Africa/Windhoek': '🇳🇦', 'Africa/Lusaka': '🇿🇲', 'Africa/Bujumbura': '🇧🇮', 'Africa/Malabo': '🇬🇶',

    // Americas (30)
    'America/New_York': '🇺🇸', 'America/Chicago': '🇺🇸', 'America/Los_Angeles': '🇺🇸', 'America/Phoenix': '🇺🇸',
    'America/Toronto': '🇨🇦', 'America/Vancouver': '🇨🇦', 'America/Halifax': '🇨🇦', 'America/Winnipeg': '🇨🇦',
    'America/Sao_Paulo': '🇧🇷', 'America/Rio_Branco': '🇧🇷', 'America/Bogota': '🇨🇴', 'America/Mexico_City': '🇲🇽',
    'America/Lima': '🇵🇪', 'America/Buenos_Aires': '🇦🇷', 'America/Santiago': '🇨🇱', 'America/Caracas': '🇻🇪',
    'America/Guatemala': '🇬🇹', 'America/Havana': '🇨🇺', 'America/Managua': '🇳🇮', 'America/Panama': '🇵🇦',
    'America/La_Paz': '🇧🇴', 'America/Asuncion': '🇵🇾', 'America/Montevideo': '🇺🇾', 'America/Santo_Domingo': '🇩🇴',
    'America/Port-au-Prince': '🇭🇹', 'America/Jamaica': '🇯🇲', 'America/Paramaribo': '🇸🇷', 'America/Cayenne': '🇬🇫',
    'America/Costa_Rica': '🇨🇷', 'America/St_Johns': '🇨🇦',

    // Asia (40)
    'Asia/Tokyo': '🇯🇵', 'Asia/Dubai': '🇦🇪', 'Asia/Singapore': '🇸🇬', 'Asia/Shanghai': '🇨🇳',
    'Asia/Hong_Kong': '🇭🇰', 'Asia/Seoul': '🇰🇷', 'Asia/Jakarta': '🇮🇩', 'Asia/Kolkata': '🇮🇳',
    'Asia/Riyadh': '🇸🇦', 'Asia/Tehran': '🇮🇷', 'Asia/Kathmandu': '🇳🇵', 'Asia/Bangkok': '🇹🇭',
    'Asia/Ho_Chi_Minh': '🇻🇳', 'Asia/Manila': '🇵🇭', 'Asia/Kuala_Lumpur': '🇲🇾', 'Asia/Taipei': '🇹🇼',
    'Asia/Tashkent': '🇺🇿', 'Asia/Dhaka': '🇧🇩', 'Asia/Yangon': '🇲🇲', 'Asia/Colombo': '🇱🇰',
    'Asia/Karachi': '🇵🇰', 'Asia/Kabul': '🇦🇫', 'Asia/Baku': '🇦🇿', 'Asia/Yerevan': '🇦🇲',
    'Asia/Tbilisi': '🇬🇪', 'Asia/Beirut': '🇱🇧', 'Asia/Amman': '🇯🇴', 'Asia/Baghdad': '🇮🇶',
    'Asia/Qatar': '🇶🇦', 'Asia/Damascus': '🇸🇾', 'Asia/Jerusalem': '🇮🇱', 'Asia/Muscat': '🇴🇲',
    'Asia/Ashgabat': '🇹🇲', 'Asia/Ulaanbaatar': '🇲🇳', 'Asia/Phnom_Penh': '🇰🇭', 'Asia/Vientiane': '🇱🇦',
    'Asia/Pyongyang': '🇰🇵', 'Asia/Seoul': '🇰🇷', 'Asia/Macau': '🇲🇴', 'Asia/Urumqi': '🇨🇳',

    // Europe (40)
    'Europe/London': '🇬🇧', 'Europe/Paris': '🇫🇷', 'Europe/Berlin': '🇩🇪', 'Europe/Madrid': '🇪🇸',
    'Europe/Rome': '🇮🇹', 'Europe/Athens': '🇬🇷', 'Europe/Moscow': '🇷🇺', 'Europe/Istanbul': '🇹🇷',
    'Europe/Stockholm': '🇸🇪', 'Europe/Zurich': '🇨🇭', 'Europe/Warsaw': '🇵🇱', 'Europe/Kyiv': '🇺🇦',
    'Europe/Bucharest': '🇷🇴', 'Europe/Budapest': '🇭🇺', 'Europe/Vienna': '🇦🇹', 'Europe/Prague': '🇨🇿',
    'Europe/Sofia': '🇧🇬', 'Europe/Belgrade': '🇷🇸', 'Europe/Lisbon': '🇵🇹', 'Europe/Dublin': '🇮🇪',
    'Europe/Oslo': '🇳🇴', 'Europe/Helsinki': '🇫🇮', 'Europe/Copenhagen': '🇩🇰', 'Europe/Riga': '🇱🇻',
    'Europe/Tallinn': '🇪🇪', 'Europe/Vilnius': '🇱🇹', 'Europe/Brussels': '🇧🇪', 'Europe/Amsterdam': '🇳🇱',
    'Europe/Luxembourg': '🇱🇺', 'Europe/Malta': '🇲🇹', 'Europe/Sarajevo': '🇧🇦', 'Europe/Skopje': '🇲🇰',
    'Europe/Tirana': '🇦🇱', 'Europe/Minsk': '🇧🇾', 'Europe/Bratislava': '🇸🇰', 'Europe/Ljubljana': '🇸🇮',
    'Europe/Zagreb': '🇭🇷', 'Europe/Andorra': '🇦🇩', 'Europe/Monaco': '🇲🇨', 'Europe/San_Marino': '🇸🇲',

    // Oceania (20)
    'Australia/Sydney': '🇦🇺', 'Australia/Melbourne': '🇦🇺', 'Australia/Perth': '🇦🇺', 'Australia/Brisbane': '🇦🇺',
    'Australia/Adelaide': '🇦🇺', 'Pacific/Auckland': '🇳🇿', 'Pacific/Honolulu': '🇺🇸', 'Pacific/Fiji': '🇫🇯',
    'Pacific/Guam': '🇬🇺', 'Pacific/Port_Moresby': '🇵🇬', 'Pacific/Noumea': '🇳🇨', 'Pacific/Palau': '🇵🇼',
    'Pacific/Tahiti': '🇵🇫', 'Pacific/Tongatapu': '🇹🇴', 'Pacific/Apia': '🇼🇸', 'Pacific/Niue': '🇳🇺',
    'Pacific/Pago_Pago': '🇦🇸', 'Pacific/Kiritimati': '🇰🇮', 'Pacific/Chatham': '🇳🇿', 'Pacific/Easter': '🇨🇱',

    // UTC and others
    'UTC': '🌐', 'GMT': '🌐', 'Etc/UTC': '🌐', 'Etc/GMT': '🌐'
};

// Get flag for a timezone (fallback to 🌐)
function getFlag(timezone) {
    return timeZoneFlags[timezone] || '🌐';
}

// Format time with GMT offset
function formatTime(timezone) {
    try {
        const date = new Date();
        const options = {
            timeZone: timezone,
            hour12: true,
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedTime = formatter.format(date);

        // Get GMT offset
        const tzFormatter = new Intl.DateTimeFormat('en-US', { 
            timeZone: timezone,
            timeZoneName: 'shortOffset' 
        });
        const tzParts = tzFormatter.formatToParts(date);
        const tzPart = tzParts.find(part => part.type === 'timeZoneName');
        const offset = tzPart ? tzPart.value : 'GMT';

        return `${formattedTime}<br><small>${offset}</small>`;
    } catch (e) {
        return "Invalid time zone";
    }
}

// Update clocks with current filter
let currentFilter = "";
function updateClocks() {
    const filteredZones = timeZones.filter(zone => 
        zone.toLowerCase().includes(currentFilter.toLowerCase())
    );

    const clocksDiv = document.getElementById('clocks');
    clocksDiv.innerHTML = filteredZones.map(zone => `
        <div class="clock">
            <h3>${getFlag(zone)} ${zone.split('/')[1] || zone}</h3>
            <p>${formatTime(zone)}</p>
        </div>
    `).join('');
}

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    currentFilter = e.target.value;
    updateClocks();
});

// Dark mode toggle
document.getElementById('themeBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('themeBtn');
    btn.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Initial load and refresh
updateClocks();
setInterval(updateClocks, 1000);