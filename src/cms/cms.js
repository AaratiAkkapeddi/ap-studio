import CMS from 'netlify-cms-app';
import React, { Component } from 'react';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import {UuidControl, UuidPreview} from 'netlify-cms-widget-uuid-v4';

// Initialize the CMS object
CMS.init()
// You only need to import the media library that you'll use. We register both
// here for example purposes.
CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
CMS.registerWidget('uuid', UuidControl, UuidPreview)

export default class ProjectPreview extends React.Component {

  render() {
    const { entry, getAsset, widgetsFor } = this.props
    const imagePath = entry.getIn(['data', 'image'])
    const image = getAsset(imagePath)
    return (
        <div className="card">
          <img className="img-fluid rounded" src={image.toString()} />
        </div>

      )
  }
}

//CMS.registerPreviewTemplate('projects', ProjectPreview)
