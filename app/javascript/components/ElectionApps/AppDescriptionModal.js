import React from 'react'
import Modal from 'react-modal'
import icons from '../../images/icons'
import AppDescription from './AppDescription'

const AppDescriptionModal = ({isOpen, toggleModal, name, logo, image, description, link}) => {
  const onAfterOpenCallback = () => {
    return true
  }

  const onRequestCloseCallback = () => {
    return true
  }

  return (
    <Modal
      onAfterOpen = { () => { onAfterOpenCallback() } }
      onRequestClose = { () => { onRequestCloseCallback() } }
      className={ {
        base: 'app-description-modal',
        afterOpen: 'app-description-modal-opened',
        beforeClose: 'app-description-modal-closed'
      } }
      overlayClassName={ {
        base: 'app-description-modal-overlay',
        afterOpen: 'app-description-modal-overlay-opened',
        beforeClose: 'app-description-modal-overlay-closed'
      } }
      isOpen={ isOpen }
      closeTimeoutMS={ 99 }
      style={ styles.modal }
      ariaHideApp={ false }
      role='document'
      aria={ { labelledby: 'heading', describedby: 'app-description' } }>
      <div id="heading">
        <div style={ styles.closeIconContainer } onClick={ () => { toggleModal() } }>
          <img style={ styles.closeIcon } src={ icons.menuClose } />
        </div>
      </div>
      <div id="app-description" style={ styles.appDescription }>
        <AppDescription
          name={ name }
          logo={ logo }
          image={ image }
          description={ description }
          link={ link } />
      </div>
    </Modal>
  )
}

const styles = {
  closeIconContainer: {
    cursor: 'pointer',
    position: 'fixed',
    top: '7rem',
    width: '3rem',
    height: '3rem',
    padding: '0.7rem',
    zIndex: 201

  },
  closeIcon: {
  },
  appDescription: {
  },
  modal: {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    content: {
      backgroundImage: 'linear-gradient(201deg, #d85c75, #ffa256 99%, #ffa355)',
      position: 'absolute',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
      top: '7rem',
      left: 0,
      right: 0,
      bottom: '4px',
      overflow: 'scroll',
      padding: '0'
    }
  }
}
export default AppDescriptionModal