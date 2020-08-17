/*535. Encode and Decode TinyURL
Medium

Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.*/

/*STATS Runtime: 84 ms, faster than 87.33% of JavaScript online submissions for Encode and Decode TinyURL.
Memory Usage: 39 MB, less than 11.67% of JavaScript online submissions for Encode and Decode TinyURL.*/

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let urlMap = {};

var encode = function(longUrl) {
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
    let string = 'http://tinyurl.com/'
    for (let i = 0; i < 6; i++) {
        string += chars[Math.floor(Math.random() * 36)]
    }
    urlMap[string] = longUrl;
    return string;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return urlMap[shortUrl]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
