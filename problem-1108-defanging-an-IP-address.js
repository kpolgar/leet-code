/*1108. Defanging an IP Address
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 

Constraints:

The given address is a valid IPv4 address.*/

/*STATS
Runtime: 44 ms, faster than 97.69% of JavaScript online submissions for Defanging an IP Address.
Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Defanging an IP Address.
*/

var defangIPaddr = function(address) {
    return address.replace(/\./g, '[.]');
};

//Another solutons: using splice
/*STATS
Runtime: 52 ms, faster than 73.57% of JavaScript online submissions for Defanging an IP Address.
Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Defanging an IP Address.
*/

var defangIPaddr = function(address) {
  address = address.split('');  
  for (let i = 0; i < address.length; i++) {
      if (address[i] === '.') {
        address.splice(i, 1, '[.]')
      }
    } return address.join('');
};

//ANother
/*STATS
Runtime: 56 ms, faster than 47.50% of JavaScript online submissions for Defanging an IP Address.
Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Defanging an IP Address.
*/

var defangIPaddr = function(address) {
    return address.split(".").join('[.]');
};
