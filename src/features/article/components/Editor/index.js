import React from 'react';
import EditorForm from '../EditorForm';

export default function Editor() {
  return (
    <div className='editor-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-10 offset-md-1 col-xs-12'>
            <EditorForm />
          </div>
        </div>
      </div>
    </div>
  );
}
