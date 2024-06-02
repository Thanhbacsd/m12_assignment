class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played++
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const $ = (id) => document.getElementById(id)

// Store artists/albums within an array
const albums = [['Operation Ivy', "album 1-Energy"], ['Blink 182', "album 2-Dude Ranch"], ['New Found Glory', "album 3-Sticks and Stones"]]

// iterate through the array by foreach method:
albums.forEach(album => {
    // create new Album class instances based on each album within the array
    let alb = new Album(album[0], album[1])
    // add album in to jbox instance
    jbox.addAlbum(alb)
})

// Bind that array to the drop down menu on the web page
jbox.albums.forEach(album => {
    const option = document.createElement("option")
    option.value = album.title
    option.textContent = `${album.artist} - ${album.title}`
    $('dropdownMenu').appendChild(option)
});

// call the play() method to track that album as being played when click the play button
$('playButton').addEventListener("click", () => {
    jbox.albums.forEach(album => {
        if(album.title == dropdownMenu.value){
            album.play()
        }
    })
});

// cal the favoriteAlbum() method to show favorite album
$('showFav').addEventListener("click", () => {
    $('favoriteAlbum').textContent = `The favorite album is ${jbox.favoriteAlbum()}`
});