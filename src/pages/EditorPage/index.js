import EditorForm from 'features/form/EditorForm';
import React from 'react';

export default function EditorPage() {
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
