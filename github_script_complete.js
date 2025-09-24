/**
 * TuneSync - AI Playlist Generator
 * GitHub Pages Compatible JavaScript
 * Version: 2.0
 */

'use strict';

// ==========================================================================
// MUSIC DATABASE - Enhanced with more variety and metadata
// ==========================================================================

const MUSIC_DATABASE = [
    // Pop Hits
    { title: "Anti-Hero", artist: "Taylor Swift", genre: "Pop", duration: "3:20", energy: 65, vibe: "nostalgic", popularity: 95, year: 2022 },
    { title: "As It Was", artist: "Harry Styles", genre: "Pop", duration: "2:47", energy: 70, vibe: "nostalgic", popularity: 92, year: 2022 },
    { title: "Bad Habit", artist: "Steve Lacy", genre: "Pop", duration: "3:51", energy: 75, vibe: "chill", popularity: 88, year: 2022 },
    { title: "Flowers", artist: "Miley Cyrus", genre: "Pop", duration: "3:20", energy: 80, vibe: "happy", popularity: 90, year: 2023 },
    { title: "Watermelon Sugar", artist: "Harry Styles", genre: "Pop", duration: "2:54", energy: 75, vibe: "happy", popularity: 85, year: 2020 },
    { title: "Levitating", artist: "Dua Lipa", genre: "Pop", duration: "3:23", energy: 85, vibe: "energetic", popularity: 89, year: 2020 },
    { title: "good 4 u", artist: "Olivia Rodrigo", genre: "Pop", duration: "2:58", energy: 85, vibe: "aggressive", popularity: 91, year: 2021 },
    { title: "Shape of You", artist: "Ed Sheeran", genre: "Pop", duration: "3:53", energy: 78, vibe: "happy", popularity: 87, year: 2017 },
    { title: "Ocean Eyes", artist: "Billie Eilish", genre: "Pop", duration: "3:20", energy: 35, vibe: "dreamy", popularity: 85, year: 2016 },
    { title: "Bad Guy", artist: "Billie Eilish", genre: "Pop", duration: "3:14", energy: 68, vibe: "dark", popularity: 93, year: 2019 },
    { title: "Happier Than Ever", artist: "Billie Eilish", genre: "Pop", duration: "4:58", energy: 45, vibe: "nostalgic", popularity: 84, year: 2021 },

    // Rock Classics & Modern
    { title: "Do I Wanna Know?", artist: "Arctic Monkeys", genre: "Rock", duration: "4:32", energy: 75, vibe: "dark", popularity: 82, year: 2013 },
    { title: "Mr. Brightside", artist: "The Killers", genre: "Rock", duration: "3:42", energy: 85, vibe: "energetic", popularity: 90, year: 2003 },
    { title: "Somebody Told Me", artist: "The Killers", genre: "Rock", duration: "3:17", energy: 82, vibe: "energetic", popularity: 78, year: 2004 },
    { title: "R U Mine?", artist: "Arctic Monkeys", genre: "Rock", duration: "3:21", energy: 72, vibe: "dark", popularity: 80, year: 2013 },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", duration: "5:55", energy: 80, vibe: "nostalgic", popularity: 95, year: 1975 },
    { title: "Don't Stop Me Now", artist: "Queen", genre: "Rock", duration: "3:29", energy: 90, vibe: "happy", popularity: 88, year: 1978 },
    { title: "Sweet Child O' Mine", artist: "Guns N' Roses", genre: "Rock", duration: "5:03", energy: 85, vibe: "energetic", popularity: 92, year: 1987 },
    { title: "Livin' on a Prayer", artist: "Bon Jovi", genre: "Rock", duration: "4:09", energy: 88, vibe: "energetic", popularity: 89, year: 1986 },
    { title: "Seven Nation Army", artist: "The White Stripes", genre: "Rock", duration: "3:51", energy: 80, vibe: "aggressive", popularity: 86, year: 2003 },

    // Hip-Hop & Rap
    { title: "God's Plan", artist: "Drake", genre: "Hip-Hop", duration: "3:19", energy: 68, vibe: "chill", popularity: 93, year: 2018 },
    { title: "HUMBLE.", artist: "Kendrick Lamar", genre: "Hip-Hop", duration: "2:57", energy: 90, vibe: "aggressive", popularity: 87, year: 2017 },
    { title: "Sicko Mode", artist: "Travis Scott", genre: "Hip-Hop", duration: "5:12", energy: 85, vibe: "dark", popularity: 89, year: 2018 },
    { title: "Life Is Good", artist: "Future ft. Drake", genre: "Hip-Hop", duration: "3:58", energy: 70, vibe: "chill", popularity: 84, year: 2020 },
    { title: "Sunflower", artist: "Post Malone", genre: "Hip-Hop", duration: "2:38", energy: 72, vibe: "happy", popularity: 91, year: 2018 },
    { title: "Rockstar", artist: "Post Malone ft. 21 Savage", genre: "Hip-Hop", duration: "3:38", energy: 75, vibe: "dark", popularity: 88, year: 2017 },
    { title: "Old Town Road", artist: "Lil Nas X", genre: "Hip-Hop", duration: "2:37", energy: 80, vibe: "happy", popularity: 95, year: 2019 },
    { title: "The Box", artist: "Roddy Ricch", genre: "Hip-Hop", duration: "3:16", energy: 78, vibe: "chill", popularity: 86, year: 2019 },
    { title: "Industry Baby", artist: "Lil Nas X ft. Jack Harlow", genre: "Hip-Hop", duration: "3:32", energy: 85, vibe: "energetic", popularity: 88, year: 2021 },

    // Electronic & EDM
    { title: "Midnight City", artist: "M83", genre: "Electronic", duration: "4:03", energy: 82, vibe: "dreamy", popularity: 79, year: 2011 },
    { title: "Something About Us", artist: "Daft Punk", genre: "Electronic", duration: "3:51", energy: 45, vibe: "romantic", popularity: 75, year: 2001 },
    { title: "Strobe", artist: "Deadmau5", genre: "Electronic", duration: "10:36", energy: 70, vibe: "focused", popularity: 72, year: 2009 },
    { title: "Breathe Me", artist: "Sia", genre: "Electronic", duration: "4:30", energy: 50, vibe: "nostalgic", popularity: 68, year: 2004 },
    { title: "Closer", artist: "The Chainsmokers", genre: "Electronic", duration: "4:04", energy: 82, vibe: "nostalgic", popularity: 90, year: 2016 },
    { title: "Wake Me Up", artist: "Avicii", genre: "Electronic", duration: "4:07", energy: 88, vibe: "energetic", popularity: 92, year: 2013 },
    { title: "Titanium", artist: "David Guetta ft. Sia", genre: "Electronic", duration: "4:05", energy: 85, vibe: "energetic", popularity: 87, year: 2011 },
    { title: "Animals", artist: "Martin Garrix", genre: "Electronic", duration: "5:05", energy: 95, vibe: "aggressive", popularity: 83, year: 2013 },
    { title: "One More Time", artist: "Daft Punk", genre: "Electronic", duration: "5:20", energy: 88, vibe: "happy", popularity: 85, year: 2000 },

    // Indie & Alternative
    { title: "Electric Feel", artist: "MGMT", genre: "Indie", duration: "3:49", energy: 75, vibe: "dreamy", popularity: 76, year: 2007 },
    { title: "Float On", artist: "Modest Mouse", genre: "Indie", duration: "3:27", energy: 72, vibe: "happy", popularity: 74, year: 2004 },
    { title: "Take Me Out", artist: "Franz Ferdinand", genre: "Indie", duration: "3:57", energy: 85, vibe: "energetic", popularity: 77, year: 2004 },
    { title: "Somebody That I Used to Know", artist: "Gotye", genre: "Indie", duration: "4:04", energy: 58, vibe: "nostalgic", popularity: 88, year: 2011 },
    { title: "Stressed Out", artist: "Twenty One Pilots", genre: "Indie", duration: "3:22", energy: 65, vibe: "nostalgic", popularity: 85, year: 2015 },
    { title: "Heathens", artist: "Twenty One Pilots", genre: "Indie", duration: "3:15", energy: 70, vibe: "dark", popularity: 82, year: 2016 },
    { title: "Dog Days Are Over", artist: "Florence + The Machine", genre: "Indie", duration: "4:12", energy: 85, vibe: "happy", popularity: 78, year: 2008 },
    { title: "Pumped Up Kicks", artist: "Foster the People", genre: "Indie", duration: "3:59", energy: 75, vibe: "dark", popularity: 80, year: 2010 },
    { title: "Tame", artist: "Pixies", genre: "Indie", duration: "3:13", energy: 80, vibe: "aggressive", popularity: 73, year: 1989 },

    // R&B & Soul
    { title: "Blinding Lights", artist: "The Weeknd", genre: "R&B", duration: "3:20", energy: 85, vibe: "energetic", popularity: 96, year: 2019 },
    { title: "Peaches", artist: "Justin Bieber", genre: "R&B", duration: "3:18", energy: 65, vibe: "chill", popularity: 83, year: 2021 },
    { title: "Stay", artist: "The Kid LAROI & Justin Bieber", genre: "R&B", duration: "2:21", energy: 78, vibe: "romantic", popularity: 89, year: 2021 },
    { title: "Adorn", artist: "Miguel", genre: "R&B", duration: "3:28", energy: 68, vibe: "romantic", popularity: 76, year: 2012 },
    { title: "Golden", artist: "Jill Scott", genre: "R&B", duration: "4:21", energy: 60, vibe: "happy", popularity: 72, year: 2004 },
    { title: "Redbone", artist: "Childish Gambino", genre: "R&B", duration: "5:26", energy: 55, vibe: "chill", popularity: 81, year: 2016 },
    { title: "Best Part", artist: "Daniel Caesar ft. H.E.R.", genre: "R&B", duration: "3:28", energy: 50, vibe: "romantic", popularity: 79, year: 2017 },
    { title: "Come Through and Chill", artist: "Miguel", genre: "R&B", duration: "3:44", energy: 58, vibe: "chill", popularity: 74, year: 2017 },
    { title: "Crazy in Love", artist: "Beyoncé", genre: "R&B", duration: "3:56", energy: 88, vibe: "energetic", popularity: 90, year: 2003 },

    // Jazz Standards
    { title: "Fly Me to the Moon", artist: "Frank Sinatra", genre: "Jazz", duration: "2:28", energy: 60, vibe: "romantic", popularity: 85, year: 1964 },
    { title: "The Way You Look Tonight", artist: "Tony Bennett", genre: "Jazz", duration: "3:22", energy: 55, vibe: "romantic", popularity: 78, year: 1964 },
    { title: "Feeling Good", artist: "Nina Simone", genre: "Jazz", duration: "2:58", energy: 70, vibe: "happy", popularity: 80, year: 1965 },
    { title: "Summertime", artist: "Ella Fitzgerald", genre: "Jazz", duration: "4:08", energy: 45, vibe: "chill", popularity: 82, year: 1958 },
    { title: "Blue Moon", artist: "Billie Holiday", genre: "Jazz", duration: "3:45", energy: 40, vibe: "nostalgic", popularity: 77, year: 1952 },

    // Classical Favorites
    { title: "Canon in D", artist: "Pachelbel", genre: "Classical", duration: "5:03", energy: 40, vibe: "romantic", po