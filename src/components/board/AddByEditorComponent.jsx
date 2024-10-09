import React, {useEffect, useRef, useState} from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript.min.js';
import {postAdd} from "../../api/boardApi.jsx";

function AddByEditorComponent() {
    const editorRef = useRef(null);
    const editorInstance = useRef(null); // 에디터 인스턴스를 위한 useRef 추가
    const [content, setContent] = useState(''); // 에디터 콘텐츠 상태 추가
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (editorRef.current) {
            // 에디터 인스턴스 초기화
            editorInstance.current = new Editor({
                el: editorRef.current,
                toolbarItems: [
                    ['heading', 'bold', 'italic', 'strike'],
                    ['hr', 'quote'],
                    ['ul', 'ol', 'task', 'indent', 'outdent'],
                    ['table', 'image', 'link'],
                    ['code', 'codeblock'],
                    ['scrollSync'],
                ],
                previewStyle: 'vertical',
                height: '500px',
                initialValue: '',
                // theme: 'dark', // 테마 설정
            });

            // addImageBlobHook 설정
            editorInstance.current.addHook('addImageBlobHook', async (blob, callback) => {
                const formData = new FormData();
                formData.append('image', blob);

                /* try {
                  const response = await axios.post('/api', formData); // API 요청
                  callback(response.data.url, blob.name); // URL과 이미지 이름을 callback으로 전달
                } catch (error) {
                  console.error('Image upload failed:', error);
                } */
                callback('...' + 'localhost3000', blob.name);
            });

            // 에디터에서 변경 사항 감지
            editorInstance.current.on('change', () => {
                setContent(editorInstance.current.getMarkdown()); // 상태 업데이트
            });
        }

        // 컴포넌트가 언마운트될 때 에디터를 정리
        return () => {
            if (editorInstance.current) {
                editorInstance.current.destroy(); // destroy() 메서드를 사용하여 정리
            }
        };
    }, []);

    // 제출 핸들러
    const handleSubmit = () => {
        const formData = new FormData();
        // TODO: 회원 ID 연결
        formData.append('userId', 1);
        formData.append('content', content);

        postAdd(formData).then(response => {
            navigate(`../${response.headers.location.split('/').pop()}`);
        })
            .catch((error) => {
                console.log(error);
                alert('게시글 저장에 실패했습니다.')
            })
    };

    useEffect(() => {
        if (content) {
            // Prism.js로 코드 하이라이팅
            Prism.highlightAll();
        }
    }, [content]);

    return (
        <div>
            <div ref={editorRef}></div>
            <Button
                onClick={handleSubmit}

            >작성하기</Button> {/* 제출 버튼 */}
        </div>
    );
}

export default AddByEditorComponent;
