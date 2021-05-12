/*1845. Seat Reservation Manager
Medium

Design a system that manages the reservation state of n seats that are numbered from 1 to n.

Implement the SeatManager class:

SeatManager(int n) Initializes a SeatManager object that will manage n seats numbered from 1 to n. All seats are initially available.
int reserve() Fetches the smallest-numbered unreserved seat, reserves it, and returns its number.
void unreserve(int seatNumber) Unreserves the seat with the given seatNumber.
 

Example 1:

Input
["SeatManager", "reserve", "reserve", "unreserve", "reserve", "reserve", "reserve", "reserve", "unreserve"]
[[5], [], [], [2], [], [], [], [], [5]]
Output
[null, 1, 2, null, 2, 3, 4, 5, null]

Explanation
SeatManager seatManager = new SeatManager(5); // Initializes a SeatManager with 5 seats.
seatManager.reserve();    // All seats are available, so return the lowest numbered seat, which is 1.
seatManager.reserve();    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
seatManager.unreserve(2); // Unreserve seat 2, so now the available seats are [2,3,4,5].
seatManager.reserve();    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
seatManager.reserve();    // The available seats are [3,4,5], so return the lowest of them, which is 3.
seatManager.reserve();    // The available seats are [4,5], so return the lowest of them, which is 4.
seatManager.reserve();    // The only available seat is seat 5, so return 5.
seatManager.unreserve(5); // Unreserve seat 5, so now the available seats are [5].
 

Constraints:

1 <= n <= 105
1 <= seatNumber <= n
For each call to reserve, it is guaranteed that there will be at least one unreserved seat.
For each call to unreserve, it is guaranteed that seatNumber will be reserved.
At most 105 calls in total will be made to reserve and unreserve.*/

/*STATS Runtime: 5408 ms, faster than 27.42% of JavaScript online submissions for Seat Reservation Manager.
Memory Usage: 76.6 MB, less than 66.93% of JavaScript online submissions for Seat Reservation Manager.*/

class SeatManager {
    constructor(n) {
        this.seats = new Array(n+1).fill(true)
        for (let i = 0; i <= n; i++) {
            this.seats.push[true]
        }
        this.smallest = 1
    }
    
    reserve() {
        let seat = this.smallest;
        this.seats[this.smallest] = false
        let start = this.smallest + 1
        for (let i = start; i <= this.seats.length; i++) {
            if (this.seats[i]) {
                this.smallest = i
                break
            }
        }
        if (seat === this.smallest) {
            this.smallest = Infinity
        }
        return seat;
    }
    
    unreserve(seatNumber) {
        this.seats[seatNumber] = true
        if (seatNumber < this.smallest) {
            this.smallest = seatNumber
        }
    }
}
