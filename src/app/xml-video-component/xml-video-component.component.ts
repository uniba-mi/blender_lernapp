import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { Keystroke } from '../shared/keystroke';

@Component({
  selector: 'app-xml-video-component',
  templateUrl: './xml-video-component.component.html',
  styles: []
})

/**
 * This component extends the basic-video-component functionality by adding a table containing the key
 * strokes used in the video. the keystrokes have to be defined in a separate XML file.
 */
export class XmlVideoComponentComponent implements OnInit {

  @Input()
  videoname: string;

  video_assets_folder: string;
  xml_assets_folder: string;
  videopath: string;
  xmlpath: string;
  keystrokes: Keystroke[] = [];
  secondsOfKeystrokes: number[] = [];
  displayAllToggled: boolean = false;

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    /* this is a server maintained by minf group, change to local path for development */
    this.video_assets_folder = "http://www.minf.uni-bamberg.de/recordings/ws2020/Blender/Update_2022/";
    this.videopath = this.video_assets_folder + this.videoname;
    /* currently set to a local path containing the xml files */
    this.xml_assets_folder = "assets/xml/";
    /* xml path is created by changing the file extension to .xml, i.e. demo.mp4 -> demo.xml.
        DEV Note: when using file extensions with more or less than 3 letters this needs adjustment!*/
    this.xmlpath = this.xml_assets_folder + this.videoname.slice(0, -3) + 'xml';

    //get the xml file
    var xmlhttp = new XMLHttpRequest();
    var object = this;
    xmlhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200){
        object.myFunction(this);
      }
    }
    xmlhttp.open("GET", this.xmlpath, true);
    xmlhttp.send();
  }

  /* used to process the xml file once its loaded */
  myFunction(xml): void {
    var x, i, xmlDoc;
    xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("keystroke");
    for(i = 0; i < x.length; i++){
      let time = x[i].getElementsByTagName("time")[0].childNodes[0].nodeValue;
      let key = x[i].getElementsByTagName("key")[0].childNodes[0].nodeValue;
      let info = x[i].getElementsByTagName("info")[0].childNodes[0].nodeValue;
      this.keystrokes.push(new Keystroke(time, key, info));
      this.secondsOfKeystrokes.push(time);
    }

    //update every second
    setInterval(() => { this.update() }, 1000);
  };

  update(): void {
    if(this.displayAllToggled){
      //no need to update this table as long as the toggle is active
      return;
    }

     var d1 = this.elementRef.nativeElement.querySelector('.video');
     let currentTime = d1.currentTime;
     this.updateKeystrokeTable(currentTime);
  }

  /* this function goes through all keystrokes of the xml and updates the table accordingly */
  updateKeystrokeTable(currentVideoTime: number): void {
    let lastIndex = -1;
    for(let i = 0; i<this.secondsOfKeystrokes.length; i++){
      if(this.secondsOfKeystrokes[i]>currentVideoTime){
        lastIndex = i-1;
        break;
      }

      if(i==this.secondsOfKeystrokes.length-1){
        lastIndex = i;
      }
    }

    let tbodyHtml = '';
    var tableBody = this.elementRef.nativeElement.querySelector('.keystrokeAnchor');

    for(let j = lastIndex; j>=0; j--){
      let ks = this.keystrokes[j];

      let insertString = '<tr>' + 
        '<td>' + this.convertTimeToDisplayFormat(ks.time) + '</td>' + 
        '<td>' + ks.key + '</td>' + 
        '<td>' + ks.info + '</td>' + 
        '</tr>';

      tbodyHtml = tbodyHtml + insertString;
    }

    tableBody.innerHTML = tbodyHtml;
  }

  /* convert to a human readible format */
  convertTimeToDisplayFormat(seconds: string): string {
    var secondsAsNumber: number = +seconds;

    if(secondsAsNumber < 60){
      return '0:' + seconds;
    }

    var minutes: number;
    minutes = Math.floor(secondsAsNumber/60);

    var secondsRemainder: number;
    secondsRemainder = secondsAsNumber%60;
    
    var secondsRemainerString: string;
    if(secondsRemainder < 10) {
      secondsRemainerString = '0' + secondsRemainder.toString();
    } else {
      secondsRemainerString = secondsRemainder.toString();
    }

    var returnString: string;
    returnString = minutes.toString() + ':' + secondsRemainerString;
    return returnString;
  }

  /* toggle was used to display all keystrokes */
  toggleChanged(): void {  
    if(!this.displayAllToggled){
      this.displayAllToggled = true;
      //update the table to display all values - this can be done by simply putting a completely high number, e.g. 24 hours = 86400s
      //no video should ever be that long..
      this.updateKeystrokeTable(86400);
    } else {
      this.displayAllToggled = false;
      //call update of table
      this.update();
    }
  }

}
