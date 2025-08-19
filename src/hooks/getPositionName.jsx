export function getPositionName(slotId) {
  const positionNumber = Number(slotId.slice(5));

  let position;

  switch (positionNumber) {
    case 1:
      position = "Loosehead Prop";
      break;

    case 2:
      position = "Hooker";
      break;

    case 3:
      position = "Tighthead Prop";
      break;

    case 4:
      position = "Lock";
      break;

    case 5:
      position = "Lock";
      break;

    case 6:
      position = "Flanker";
      break;

    case 7:
      position = "Flanker";
      break;

    case 8:
      position = "Number 8";
      break;

    case 9:
      position = "Scrum-half";
      break;

    case 10:
      position = "Fly-half";
      break;

    case 11:
      position = "Wing";
      break;

    case 12:
      position = "Inside Centre";
      break;

    case 13:
      position = "Outside Centre";
      break;

    case 14:
      position = "Wing";
      break;

    case 15:
      position = "Fullback";
      break;

    default:
      position = "Replacement";
  }

  return position;
}

/*
///////////////////////////
Młyn (Forwards):
-------------------
Loosehead Prop (1): (Lewy filar)
Hooker (2): (Młynarz)
Tighthead Prop (3): (Prawy filar)
Lock (4 & 5): (Wspieracze, numer 4 i 5)
Flanker (6 & 7): (Rwacze, numer 6 i 7)
Number 8 (8): (Wiązacz)

///////////////////////////
Atak (Backs):
-------------------
Scrum-half (9): (Łącznik młyna)
Fly-half (10): (Łącznik ataku)
Inside Centre (12): (Środkowy ataku)
Outside Centre (13): (Środkowy ataku)
Wing (11 & 14): (Skrzydłowi, numery 11 i 14)
Fullback (15): (Obrońca)

 */
