import React, { useEffect, useRef } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css'; // 에디터 CSS 임포트
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import {useSelector} from "react-redux"; // 뷰어 CSS 임포트

const ViewerComponent = ({content}) => {
  const viewerRef = useRef(null);
  const viewerInstance = useRef(null); // Viewer 인스턴스를 위한 ref 추가



  useEffect(() => {
    if (viewerRef.current) {
      // Viewer 인스턴스 생성
      viewerInstance.current = Editor.factory({
        el: viewerRef.current,
        viewer: true,
        height: '500px',
        initialValue: content || '# hello', // 초기 콘텐츠
      });
    }

    // 컴포넌트 언마운트 시 Viewer 인스턴스 정리
    return () => {
      if (viewerInstance.current) {
        viewerInstance.current.destroy(); // destroy 메서드 호출
      }
    };
  }, [content]); // content가 변경될 때마다 Viewer 업데이트

  return <div ref={viewerRef}></div>; // Viewer가 렌더링될 div
};

export default ViewerComponent;
