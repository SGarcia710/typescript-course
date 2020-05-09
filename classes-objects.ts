class Video {
  title: string;
  constructor(title: string) {
    this.title = title;
  }

  play(): void {
    console.log('Playing...');
  }
  stop(): void {
    console.log('Stopped.');
  }
  setTitle(title: string) {
    this.title = title;
  }
  getTitle(): string {
    return this.title;
  }
}

let myVideo: Video = new Video('TypeScript course');
console.log(myVideo.getTitle());
myVideo.setTitle('Nuevo titulo de curso');

// Inheritance
class YoutubeVideo extends Video {
  constructor(title: string) {
    super(title); // We always have to call the Father's constructor when we overwrites the constructor function.
    console.log('Inicializando vídeo en youtube');
  }
  // Overwrite function
  play() {
    super.play(); // This line calls the play function from the father class.
    console.log('from youtube...');
  }
}

let myYoutubeVideo: YoutubeVideo = new YoutubeVideo('Youtube course');
myYoutubeVideo.play();
