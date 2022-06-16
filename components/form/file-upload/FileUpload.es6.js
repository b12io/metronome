/*  */
import React from 'react'
import classnames from 'classnames'

import Dropzone from 'react-dropzone'
import Button from '../../form/button/Button.es6.js'
import {TimesCircle, ImageUpload, Notice} from '../../Icons.es6.js'



class FileUpload extends React.Component {
  static defaultProps = {
    multiple: false,
    onAdd: () => {},
    removeFileByIndex: () => {},
    fileList: [],
    showDropzone: false,
    dropzoneLabel: '',
    showButton: true,
    buttonLabel: 'Attach files',
    buttonBlock: false,
    buttonPrimary: false,
    buttonSmall: false,
    loading: false,
    loadingLabel: '',
    mediaCollectionItem: false,
    hasError: false,
    hideUploadedFileLinks: false,
    errorMessage: 'Error uploading file(s)'
  }

  onDrop = (acceptedList, rejectedList) => {
    this.props.onAdd(acceptedList, rejectedList)
  }

  render () {
    const {multiple, showDropzone, dropzoneLabel, accept, showButton, buttonLabel, buttonBlock,
      buttonPrimary, buttonSmall, buttonIcon, loading, loadingLabel, mediaCollectionItem,
      hideUploadedFileLinks, fileList, hasError, errorMessage, children} = this.props
    const fileDivs = fileList.map((file, idx) => {
      return (
        <div key={`fn-${file.name}-${idx}`} >
          <a className="file-upload-link" href={file.url} target="_blank">{file.name}</a>
          <span
            onClick={() => {
              this.props.removeFileByIndex(idx)
            }}>
            <TimesCircle />
          </span>
        </div>
      )
    })
    const icon = loading
      ? (<div className={classnames({
        'ds-upload__spinner': true,
        'ds-upload__spinner--light-background': mediaCollectionItem
      })} />)
      : (<ImageUpload color="#766CFF" width="32" height="28" viewBox="0 0 32 32" />)
    const uploadContent = (
      <div>
        {icon}
        <div className="ds-upload__text">
          {(loading && loadingLabel) || dropzoneLabel}
        </div>
      </div>
    )
    return (
      <div className="ds-form-group">
        <Dropzone
          // $FlowFixMe: Not sure how to type this.dropzoneRef
          ref={elem => { this.dropzoneRef = elem }}
          className={classnames({
            'hidden': !showDropzone,
            'ds-upload': true,
            'ds-upload--uploading': loading,
            'ds-upload--has-error': hasError
          })}
          multiple={multiple}
          accept={accept}
          onClick={(e) => { e.preventDefault() } }
          onDrop={this.onDrop}>
          {children || uploadContent}

        </Dropzone>
        {hasError && (
          <div className="ds-upload__error">
            <Notice color="#f05e5e"/>
            {errorMessage}
          </div>
        )}
        {showButton && <Button
          primary={buttonPrimary}
          block={buttonBlock}
          label={buttonLabel}
          icon={buttonIcon}
          small={buttonSmall}
          loading={loading}
          // $FlowFixMe: Not sure how to type this.dropzoneRef
          onClick={(e) => { e.preventDefault(); this.dropzoneRef.open() } }
        />}
        {!hideUploadedFileLinks && (fileDivs)}
      </div>
    )
  }
}

export default FileUpload
