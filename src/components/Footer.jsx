import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

 const Footer=()=> {
  return (
    <MDBFooter className='bg-dark white text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1 icon'
            style={{ backgroundColor: '#3b5998' }}
            href='#'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 icon'
            style={{ backgroundColor: '#55acee' }}
            href='#'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 icon'
            style={{ backgroundColor: '#dd4b39' }}
            href='#'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1 icon'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/mxnu_30?igsh=MThkcDZvenZlZDJlZg%3D%3D&utm_source=qr'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 icon'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/manu-agarwal-331a7b226/'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 icon'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/mxnuag'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
        © 2024 Copyright:
        <a className='text-white' href='#'>
          TheTimesMedia.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer