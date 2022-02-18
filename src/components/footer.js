import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = ({ data, location }) => {
	function marquee(){
	  let speed = 0.2
	  const parentSelector = document.querySelector('.marquee');
	  if(parentSelector){
		const clone = parentSelector.innerHTML;
      const firstElement = parentSelector.children[0];
      let i = 0;
      let n = Math.floor(window.innerWidth/firstElement.clientWidth)
      parentSelector.insertAdjacentHTML('beforeend', clone);
      parentSelector.insertAdjacentHTML('beforeend', clone);
      for (var x = 100 - 1; x >= 0; x--) {
        parentSelector.insertAdjacentHTML('beforeend', clone);
      }

      setInterval(function () {
        firstElement.style.marginLeft = `-${i}px`;
        if (i > (firstElement.clientWidth * 90)) {
          i = 0;
        }
        i = i + speed;
      }, 0);

	  }
      
	}
	if(typeof(document) != "undefined"){
		setTimeout(marquee,800)
	}
	return (
		<>
		<div className="marquee">
		<h1>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg className="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1214.36 261.58"><defs></defs><g><g><path d="M1214.36,120.64c-2.39-29.86-8.06-56.14-41.51-56.14-27.17,0-48.08,20.6-48.08,77.34s20.91,77.34,48.08,77.34c35.24-.6,40.91-31.05,41.51-58.83l-26.58-.89c-2.09,15.53-2.69,32.85-13.14,32.85-8.06,0-11.05-9-11.05-46.59,0-47.18,1.8-56.14,9.56-56.14,7.46,0,9.55,8.66,10.15,32ZM1019.9,216.79h34.64V98.84a15.65,15.65,0,0,1,11.65-5.67c6,0,9.85,3.58,9.85,14.93V216.79h34.64V95.56c0-19.71-7.76-31.06-24.19-31.06-12.84,0-23.29,8.36-31.35,16.72h-.6V66.89H1019.9Zm-56.43,0h38.82V4.18H963.47ZM853.82,261.58h15.53l23-47.77V178H853.53v38.82h14.33ZM804.14,141.84c0,45.69-2.69,52.26-10.75,52.26s-10.75-6.57-10.75-52.26,2.68-52.26,10.75-52.26,10.75,6.57,10.75,52.26m37,0c0-56.74-20.91-77.34-47.78-77.34s-47.78,20.6-47.78,77.34,20.9,77.34,47.78,77.34,47.78-20.6,47.78-77.34M697,38.82h34.64V4.18H697Zm0,178h34.64V66.89H697Zm-51.75-27.47c-1.79,2.69-5.37,4.78-10.45,4.78-10.15,0-11.94-6.87-11.94-52.86,0-47.18,2.68-53.45,12.84-53.45,4.47,0,8.06,2.09,9.55,4.78Zm1.49,27.47h33.15V4.18H645.28V75.25h-.6A26.74,26.74,0,0,0,622.89,64.5c-25.39,0-37,27.47-37,77,0,49,9,77.64,34,77.64,13.74,0,19.41-6.57,26.28-14.33h.59Zm-76-149.9H536.11v118a15.65,15.65,0,0,1-11.64,5.67c-6,0-9.86-3.58-9.86-14.93V66.89H480V188.13c0,18.81,9.86,31.05,25.68,31.05,11.65,0,21.8-8.36,29.87-16.72h.59v14.33h34.64ZM397.14,93.76h16.13v97.35c0,20.61,13.43,28.07,29,28.07,7.17,0,19.11-.3,29.56-3V188.13c-2.09,0-5.67.59-9.85.59-12.54,0-13.74-7.76-13.74-12.84V93.76h21.5V66.89H447.91V12.24H413.27V66.89H397.14ZM289.79,155.28c0,29.26,8.36,65.69,49.87,65.69,34.94,0,53.45-26,53.45-58.52,0-61.82-70.47-74.06-70.47-110.19,0-11.65,5.37-19.41,14.63-19.41,15.53,0,15.53,20,15.53,31.95h34.64C386.54,26.58,373.1,0,338.17,0,305.32,0,288,26,288,57.93c0,63,70.47,71.67,70.47,109.59,0,8.66-4.48,20.61-17.32,20.61-16.72,0-16.72-20.91-16.72-32.85ZM123.17,216.79H162v-85.1h15.53c36.43,0,51.36-25.68,51.36-63.9,0-46-23-63.61-66.89-63.61H123.17ZM162.29,37h3c12.84,0,24.78.89,24.78,31.65,0,25.68-8.66,31.95-24.48,31.95h-3.29ZM0,216.79H32.55l5.37-47.18H69.28L75,216.79h37.33L86,4.18H29.86Zm66-78.23H41.81L54.05,37h.6Z"/></g></g></svg>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg className="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1811.68 261.58"><defs></defs><g><g><path d="M853.82,261.58h15.53l23-47.77V178H853.53v38.82h14.33ZM804.14,141.84c0,45.69-2.69,52.26-10.75,52.26s-10.75-6.57-10.75-52.26,2.68-52.26,10.75-52.26,10.75,6.57,10.75,52.26m37,0c0-56.74-20.91-77.34-47.78-77.34s-47.78,20.6-47.78,77.34,20.9,77.34,47.78,77.34,47.78-20.6,47.78-77.34M697,38.82h34.64V4.18H697Zm0,178h34.64V66.89H697Zm-51.75-27.47c-1.79,2.69-5.37,4.78-10.45,4.78-10.15,0-11.94-6.87-11.94-52.86,0-47.18,2.68-53.45,12.84-53.45,4.47,0,8.06,2.09,9.55,4.78Zm1.49,27.47h33.15V4.18H645.28V75.25h-.6A26.74,26.74,0,0,0,622.89,64.5c-25.39,0-37,27.47-37,77,0,49,9,77.64,34,77.64,13.74,0,19.41-6.57,26.28-14.33h.59Zm-76-149.9H536.11v118a15.65,15.65,0,0,1-11.64,5.67c-6,0-9.86-3.58-9.86-14.93V66.89H480V188.13c0,18.81,9.86,31.05,25.68,31.05,11.65,0,21.8-8.36,29.87-16.72h.59v14.33h34.64ZM397.14,93.76h16.13v97.35c0,20.61,13.43,28.07,29,28.07,7.17,0,19.11-.3,29.56-3V188.13c-2.09,0-5.67.59-9.85.59-12.54,0-13.74-7.76-13.74-12.84V93.76h21.5V66.89H447.91V12.24H413.27V66.89H397.14ZM289.79,155.28c0,29.26,8.36,65.69,49.87,65.69,34.94,0,53.45-26,53.45-58.52,0-61.82-70.47-74.06-70.47-110.19,0-11.65,5.37-19.41,14.63-19.41,15.53,0,15.53,20,15.53,31.95h34.64C386.54,26.58,373.1,0,338.17,0,305.32,0,288,26,288,57.93c0,63,70.47,71.67,70.47,109.59,0,8.66-4.48,20.61-17.32,20.61-16.72,0-16.72-20.91-16.72-32.85ZM123.17,216.79H162v-85.1h15.53c36.43,0,51.36-25.68,51.36-63.9,0-46-23-63.61-66.89-63.61H123.17ZM162.29,37h3c12.84,0,24.78.89,24.78,31.65,0,25.68-8.66,31.95-24.48,31.95h-3.29ZM0,216.79H32.55l5.37-47.18H69.28L75,216.79h37.33L86,4.18H29.86Zm66-78.23H41.81L54.05,37h.6Z"/><g className="invert"><path d="M963.18,4.4H1001l35.36,111.79h.57V4.4h30.9V216.06h-29.89L996.62,87.94H996V216.06H963.29Z"/><path d="M1129.37,152.4v6.49c0,25.88,6.21,31.24,13.33,31.24,12.54,0,14.91-10.39,18.19-20.5l24.07,7.11c-5.09,28.25-21.13,41.92-44.63,41.92-27,0-47.85-20.51-47.85-77s20.85-77,47.85-77c34.8,0,44,42.82,44,72.53v15.2Zm22.26-26.78v-4.18c0-21.69-3.28-30-11.3-30s-10.68,7.11-10.68,30v4.18Z"/><path d="M1198.34,66.82h30.9l8.93,79.08h.56l13.11-79.08h27.06L1291,145.9h.62l10.68-79.08h25l-22.26,149.24H1275.9l-13.1-86.26h-.57L1248.56,216h-29.43Z"/><path d="M1434.64,134.32,1399.44,4.4h38.36l18.13,82.92h.57L1476.27,4.4h32.37l-35.36,126.36v85.3h-38.64Z"/><path d="M1556.48,218.43c-26.72,0-47.5-20.5-47.5-77s20.78-77,47.5-77,47.57,20.51,47.57,77S1583.26,218.43,1556.48,218.43Zm0-129c-8,0-10.67,6.55-10.67,52s2.65,52,10.67,52,10.74-6.56,10.74-52S1564.51,89.41,1556.48,89.41Z"/><path d="M1627.55,66.82H1662V93h.62c8-12.77,18.13-25.81,34.46-27v39.54a43,43,0,0,0-13.34-1.75A28.23,28.23,0,0,0,1662,117.43v98.69h-34.46Z"/><path d="M1715.78,4.4h34.46V118.84h.62l26.44-52h28.24L1781.76,112l28,104.05h-34.51l-17-67.16h0l-8,16.32v50.84h-34.46Z"/></g></g></g></svg>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg className="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1427.68 261.58"><defs></defs><g><g ><path d="M853.82,261.58h15.53l23-47.77V178H853.53v38.82h14.33ZM804.14,141.84c0,45.69-2.69,52.26-10.75,52.26s-10.75-6.57-10.75-52.26,2.68-52.26,10.75-52.26,10.75,6.57,10.75,52.26m37,0c0-56.74-20.91-77.34-47.78-77.34s-47.78,20.6-47.78,77.34,20.9,77.34,47.78,77.34,47.78-20.6,47.78-77.34M697,38.82h34.64V4.18H697Zm0,178h34.64V66.89H697Zm-51.75-27.47c-1.79,2.69-5.37,4.78-10.45,4.78-10.15,0-11.94-6.87-11.94-52.86,0-47.18,2.68-53.45,12.84-53.45,4.47,0,8.06,2.09,9.55,4.78Zm1.49,27.47h33.15V4.18H645.28V75.25h-.6A26.74,26.74,0,0,0,622.89,64.5c-25.39,0-37,27.47-37,77,0,49,9,77.64,34,77.64,13.74,0,19.41-6.57,26.28-14.33h.59Zm-76-149.9H536.11v118a15.65,15.65,0,0,1-11.64,5.67c-6,0-9.86-3.58-9.86-14.93V66.89H480V188.13c0,18.81,9.86,31.05,25.68,31.05,11.65,0,21.8-8.36,29.87-16.72h.59v14.33h34.64ZM397.14,93.76h16.13v97.35c0,20.61,13.43,28.07,29,28.07,7.17,0,19.11-.3,29.56-3V188.13c-2.09,0-5.67.59-9.85.59-12.54,0-13.74-7.76-13.74-12.84V93.76h21.5V66.89H447.91V12.24H413.27V66.89H397.14ZM289.79,155.28c0,29.26,8.36,65.69,49.87,65.69,34.94,0,53.45-26,53.45-58.52,0-61.82-70.47-74.06-70.47-110.19,0-11.65,5.37-19.41,14.63-19.41,15.53,0,15.53,20,15.53,31.95h34.64C386.54,26.58,373.1,0,338.17,0,305.32,0,288,26,288,57.93c0,63,70.47,71.67,70.47,109.59,0,8.66-4.48,20.61-17.32,20.61-16.72,0-16.72-20.91-16.72-32.85ZM123.17,216.79H162v-85.1h15.53c36.43,0,51.36-25.68,51.36-63.9,0-46-23-63.61-66.89-63.61H123.17ZM162.29,37h3c12.84,0,24.78.89,24.78,31.65,0,25.68-8.66,31.95-24.48,31.95h-3.29ZM0,216.79H32.55l5.37-47.18H69.28L75,216.79h37.33L86,4.18H29.86Zm66-78.23H41.81L54.05,37h.6Z"/><g className="invert"><path d="M963.18,3.88h38.73c43.77,0,66.71,17.56,66.71,63.48,0,38.11-14.89,63.77-51,63.77H1002.2v84.94h-39Zm39,96.27h3.28c15.8,0,24.41-6.23,24.41-31.88,0-30.69-11.9-31.54-24.69-31.54h-3Z"/><path d="M1086.17,106.55c0-26.22,17-42.3,42.87-42.3,37.26,0,42.3,23.22,42.3,43.49v80.47a179.16,179.16,0,0,0,3.62,28h-34l-2.38-13.7a34.6,34.6,0,0,1-28,16.08c-24.41,0-30.69-22.31-30.69-38.11,0-35.17,22.65-56.63,56.62-58.72v-17c0-11.33-3.28-13.71-9.23-13.71-9.85,0-11.6,10.76-12.79,18.18Zm50.63,36.64c-18.75,3.28-22.37,14.61-22.37,31.6,0,6.85,3,17,12.23,17a11,11,0,0,0,10.14-6Z"/><path d="M1197,66.46h34.54V92.68h.63c8-12.8,18.18-25.94,34.54-27.13v39.64a41.75,41.75,0,0,0-13.42-1.81,28.29,28.29,0,0,0-21.74,13.7V216H1197Z"/><path d="M1284.31,3.88h34.54V38.6h-34.54Zm0,62.29h34.54V215.73h-34.54Z"/><path d="M1395.75,108.14c-1.19-9.23-3.28-19-15.23-19a11.32,11.32,0,0,0-10.49,12.1c0,.23,0,.47.07.7,0,24.4,56,26.78,56,72.37a41.74,41.74,0,0,1-39.22,44.11,43.41,43.41,0,0,1-4.84,0c-28.31,0-39.92-17-42.92-43.49l27.12-4.19c2.38,16.08,5.66,22.65,17,22.65a11.33,11.33,0,0,0,11.64-11q0-.62,0-1.23c0-23.5-53.63-25-53.63-75.66A39.65,39.65,0,0,1,1379,64.09c1.09,0,2.19,0,3.29,0,24.13,0,36.07,17.55,38.17,39.92Z"/></g></g></g></svg> 

		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg className="logo-svg los-angeles" viewBox="0 0 466 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.961 33.5783H10.2657L13.1485 9.67193H13.2891L15.961 33.5783ZM0.421875 52.0003H8.08599L9.35162 40.8909H16.7345L18.0704 52.0003H26.8595L20.672 1.93751H7.45317L0.421875 52.0003Z" fill="#111F4F"/>
<path d="M39.0726 9.67193H39.7757C42.7992 9.67193 45.6117 9.88287 45.6117 17.1251C45.6117 23.172 43.5726 24.6486 39.846 24.6486H39.0726V9.67193ZM29.8616 52.0003H39.0023V31.9611H42.6585C51.2367 31.9611 54.7523 25.9142 54.7523 16.9142C54.7523 6.08597 49.3383 1.93751 39.0023 1.93751H29.8616V52.0003Z" fill="#111F4F"/>
<path d="M68.253 37.5159C68.253 44.4065 70.2217 52.9847 79.9952 52.9847C88.2219 52.9847 92.5813 46.8675 92.5813 39.2034C92.5813 24.6486 75.9874 21.7658 75.9874 13.2579C75.9874 10.5157 77.253 8.68754 79.4327 8.68754C83.089 8.68754 83.089 13.3985 83.089 16.211H91.2453C91.0344 7.21098 87.8703 0.953125 79.6437 0.953125C71.9093 0.953125 67.8311 7.07035 67.8311 14.5938C67.8311 29.4299 84.425 31.4689 84.425 40.3987C84.425 42.4378 83.3703 45.2503 80.3468 45.2503C76.4093 45.2503 76.4093 40.3284 76.4093 37.5159H68.253Z" fill="#111F4F"/>
<path d="M93.5036 23.0314H97.3005V45.9534C97.3005 50.805 100.465 52.5628 104.121 52.5628C105.808 52.5628 108.621 52.4925 111.082 51.8597V45.2503C110.59 45.2503 109.746 45.3909 108.761 45.3909C105.808 45.3909 105.527 43.5628 105.527 42.3674V23.0314H110.59V16.7032H105.457V3.83595H97.3005V16.7032H93.5036V23.0314Z" fill="#111F4F"/>
<path d="M133.848 16.7032H125.692V44.4768C125.13 45.18 124.075 45.8128 122.95 45.8128C121.544 45.8128 120.63 44.969 120.63 42.2971V16.7032H112.473V45.2503C112.473 49.68 114.794 52.5628 118.52 52.5628C121.262 52.5628 123.653 50.5941 125.551 48.6253H125.692V52.0003H133.848V16.7032Z" fill="#111F4F"/>
<path d="M151.322 52.0003H159.127V1.93751H150.971V18.672H150.83C149.846 17.336 148.088 16.1407 145.697 16.1407C139.721 16.1407 136.978 22.6095 136.978 34.2815C136.978 45.8128 139.088 52.5628 144.994 52.5628C148.228 52.5628 149.564 51.0159 151.182 49.1878H151.322V52.0003ZM150.971 45.5315C150.549 46.1643 149.705 46.6565 148.51 46.6565C146.119 46.6565 145.697 45.0393 145.697 34.2111C145.697 23.1017 146.33 21.6251 148.721 21.6251C149.775 21.6251 150.619 22.1173 150.971 22.7501V45.5315Z" fill="#111F4F"/>
<path d="M162.651 52.0003H170.807V16.7032H162.651V52.0003ZM162.651 10.0938H170.807V1.93751H162.651V10.0938Z" fill="#111F4F"/>
<path d="M196.472 34.3518C196.472 20.9923 191.551 16.1407 185.222 16.1407C178.894 16.1407 173.972 20.9923 173.972 34.3518C173.972 47.7112 178.894 52.5628 185.222 52.5628C191.551 52.5628 196.472 47.7112 196.472 34.3518ZM187.754 34.3518C187.754 45.1096 187.121 46.6565 185.222 46.6565C183.324 46.6565 182.691 45.1096 182.691 34.3518C182.691 23.5939 183.324 22.047 185.222 22.047C187.121 22.047 187.754 23.5939 187.754 34.3518Z" fill="#111F4F"/>
<path d="M200.207 62.5473H203.864L209.278 51.2972V42.8596H200.137V52.0003H203.512L200.207 62.5473Z" fill="#111F4F"/>
<g className="invert"><path d="M227.466 52.0003H248.278V44.2659H236.606V1.93751H227.466V52.0003Z" fill="#111F4F"/>
<path d="M273.138 34.3518C273.138 20.9923 268.216 16.1407 261.888 16.1407C255.56 16.1407 250.638 20.9923 250.638 34.3518C250.638 47.7112 255.56 52.5628 261.888 52.5628C268.216 52.5628 273.138 47.7112 273.138 34.3518ZM264.419 34.3518C264.419 45.1096 263.787 46.6565 261.888 46.6565C259.99 46.6565 259.357 45.1096 259.357 34.3518C259.357 23.5939 259.99 22.047 261.888 22.047C263.787 22.047 264.419 23.5939 264.419 34.3518Z" fill="#111F4F"/>
<path d="M294.662 25.5627C294.17 20.2892 291.358 16.1407 285.662 16.1407C279.967 16.1407 275.959 20.2892 275.959 25.9142C275.959 37.8674 288.615 38.219 288.615 43.7737C288.615 45.3909 287.561 46.6565 285.873 46.6565C283.201 46.6565 282.358 45.1096 281.795 41.3127L275.397 42.2971C276.1 48.555 278.842 52.5628 285.522 52.5628C291.85 52.5628 295.928 48.2737 295.928 42.1565C295.928 31.3986 282.709 30.8361 282.709 25.0705C282.709 23.5236 283.623 22.047 285.17 22.047C287.983 22.047 288.475 24.3673 288.756 26.547L294.662 25.5627Z" fill="#111F4F"/>
<path d="M325.722 33.5783H320.027L322.91 9.67193H323.051L325.722 33.5783ZM310.183 52.0003H317.847L319.113 40.8909H326.496L327.832 52.0003H336.621L330.433 1.93751H317.215L310.183 52.0003Z" fill="#111F4F"/>
<path d="M338.428 52.0003H346.584V24.2267C347.146 23.5236 348.201 22.8908 349.326 22.8908C350.732 22.8908 351.647 23.7345 351.647 26.4064V52.0003H359.803V23.4533C359.803 18.8126 357.975 16.1407 354.107 16.1407C351.084 16.1407 348.623 18.1095 346.725 20.0782H346.584V16.7032H338.428V52.0003Z" fill="#111F4F"/>
<path d="M385.292 12.4844C382.199 12.836 379.386 15.0157 378.05 17.8282C376.011 16.3517 374.183 16.1407 372.566 16.1407C366.097 16.1407 362.3 21.4845 362.3 27.1095C362.3 31.1174 363.144 34.5627 366.589 36.9533C363.988 38.5002 361.948 40.3987 361.948 43.7034C361.948 46.5862 364.269 48.344 366.8 49.0472V49.1878C363.706 50.3831 360.542 51.7894 360.542 55.7269C360.542 57.9769 363.214 62.5473 372.566 62.5473C382.058 62.5473 385.292 57.555 385.292 52.4925C385.292 40.6096 368.699 44.2659 368.699 39.9768C368.699 39.2737 368.839 38.7112 369.472 38.3596C370.386 38.6409 371.37 38.7112 372.355 38.7112C378.753 38.7112 382.761 33.3674 382.761 27.3205C382.761 24.4376 382.058 22.2579 380.37 20.1486C381.074 19.5861 382.128 19.2345 382.831 19.2345C383.394 19.2345 384.519 19.3751 385.292 19.6564V12.4844ZM378.542 53.6175C378.542 55.7972 376.503 57.0628 372.847 57.0628C368.558 57.0628 367.292 56.0082 367.292 54.2503C367.292 51.7191 371.089 50.6644 372.355 50.4534C373.199 50.5237 378.542 51.3675 378.542 53.6175ZM369.613 27.4611C369.613 23.1017 370.597 21.2032 372.566 21.2032C374.464 21.2032 375.449 23.1017 375.449 27.4611C375.449 31.7502 374.464 33.6486 372.566 33.6486C370.597 33.6486 369.613 31.7502 369.613 27.4611Z" fill="#111F4F"/>
<path d="M407.791 36.883V33.2971C407.791 26.2658 405.612 16.211 397.385 16.1407C390.987 16.1407 386.065 20.9923 386.065 34.3518C386.065 47.7112 390.987 52.5628 397.385 52.5628C402.94 52.5628 406.737 49.2581 407.932 42.6487L402.237 40.9612C401.463 43.3518 400.901 45.8128 397.948 45.8128C396.26 45.8128 394.784 44.5471 394.784 38.4299V36.883H407.791ZM394.784 30.5549V29.5705C394.784 24.1564 395.487 22.4689 397.315 22.4689C399.284 22.4689 400.057 24.4376 400.057 29.5705V30.5549H394.784Z" fill="#111F4F"/>
<path d="M410.433 52.0003H418.589V1.93751H410.433V52.0003Z" fill="#111F4F"/>
<path d="M443.481 36.883V33.2971C443.481 26.2658 441.301 16.211 433.074 16.1407C426.676 16.1407 421.754 20.9923 421.754 34.3518C421.754 47.7112 426.676 52.5628 433.074 52.5628C438.629 52.5628 442.426 49.2581 443.621 42.6487L437.926 40.9612C437.153 43.3518 436.59 45.8128 433.637 45.8128C431.949 45.8128 430.473 44.5471 430.473 38.4299V36.883H443.481ZM430.473 30.5549V29.5705C430.473 24.1564 431.176 22.4689 433.004 22.4689C434.973 22.4689 435.746 24.4376 435.746 29.5705V30.5549H430.473Z" fill="#111F4F"/>
<path d="M464.474 25.5627C463.981 20.2892 461.169 16.1407 455.473 16.1407C449.778 16.1407 445.77 20.2892 445.77 25.9142C445.77 37.8674 458.427 38.219 458.427 43.7737C458.427 45.3909 457.372 46.6565 455.684 46.6565C453.012 46.6565 452.169 45.1096 451.606 41.3127L445.208 42.2971C445.911 48.555 448.653 52.5628 455.333 52.5628C461.661 52.5628 465.739 48.2737 465.739 42.1565C465.739 31.3986 452.52 30.8361 452.52 25.0705C452.52 23.5236 453.434 22.047 454.981 22.047C457.794 22.047 458.286 24.3673 458.567 26.547L464.474 25.5627Z" fill="#111F4F"/></g>
</svg>

		</h1></div>
	    <footer>
	      <div>
	      	<a href={`${data?.info?.edges[0].node.frontmatter.instagram}`}>INSTAGRAM</a><br/><br/>
	      	{location.pathname.includes("/info") &&
	      	  <>
	      		<span>Design: Kurt Woerpel</span><br/>
	      		<span>Development: Aarati Akkapeddi</span><br/>
	      		<span>Brand Identity: Helios Capdevila</span>
	      		</>
	        }
	      </div>
	      <div>
	      	<a href={`${data?.info?.edges[0].node.frontmatter.models}`}>MODELS.COM</a>
	      </div>
	      <div>
	      	<a href={`mailto:${data?.info?.edges[0].node.frontmatter.email}`}>GENERAL INQUIRIES</a><br/>
	      	<a href={`mailto:${data?.info?.edges[0].node.frontmatter.email}`}>{data?.info?.edges[0].node.frontmatter.email}</a>
	      </div>
	      <div>
	      	<a href="/cookiepolicy">COOKIES & DATA<br/>
	      	POLICY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
	      </div>
	    </footer>
	    </>
	  )
}

export default Footer
