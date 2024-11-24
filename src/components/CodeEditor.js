import React, { useEffect, useRef, useState } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here');
  const editorRef = useRef();
  const { setContainer } = useCodeMirror({
    container: editorRef.current,
    value: code,
    extensions: [javascript()],
    theme: oneDark,
    onChange: (value) => setCode(value),
  });

  useEffect(() => {
    if (editorRef.current) {
      setContainer(editorRef.current);
    }
  }, [editorRef.current]);

  return (
    <div className="code-editor" ref={editorRef} style={{ height: '100px', width: '100%' }} />
  );
};

export default CodeEditor;
