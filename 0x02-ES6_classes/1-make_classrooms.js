import ClassRoom from './0-classroom'; /* task 0 */

export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
