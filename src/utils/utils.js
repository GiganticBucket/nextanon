// src/utils/utils.js

export function getNextMeetingDate(meetingDay, meeting_time) {
    const today = new Date();
    const todayDayOfWeek = today.getDay();
    let daysUntilNextMeeting = meetingDay - todayDayOfWeek;
  
    if (daysUntilNextMeeting < 0) {
      daysUntilNextMeeting += 7;
    } else if (daysUntilNextMeeting === 0) {
      const currentHour = today.getHours();
      const currentMinutes = today.getMinutes();
      const [meetingHour, meetingMinutes] = meeting_time.split(':').map(Number);
  
      const currentTimeInMinutes = currentHour * 60 + currentMinutes;
      const meetingTimeInMinutes = meetingHour * 60 + meetingMinutes;
  
      if (currentTimeInMinutes >= meetingTimeInMinutes) {
        daysUntilNextMeeting += 7;
      }
    }
  
    const nextMeetingDate = new Date(today);
    nextMeetingDate.setDate(today.getDate() + daysUntilNextMeeting);
    return nextMeetingDate;
  }
  
  export function getDisplayTimeFromTwentyFourHourTime(time) {
    const [hours, minutes] = time.split(':').map(Number);
    const isPM = hours >= 12;
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes} ${isPM ? 'PM' : 'AM'}`;
  }