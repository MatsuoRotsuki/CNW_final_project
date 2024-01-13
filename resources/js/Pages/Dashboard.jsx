import Card from '@/Components/Card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {  Button, Modal, Form, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import  { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'react-quill/dist/quill.snow.css';

export default function Dashboard({ auth, posts }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleOk = () => {
        setIsModalOpen(false);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={(
                <div className="w-full flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Home</h2>
                    <Button size="large" icon={<PlusOutlined />} onClick={showModal}>
                        Create new blog
                    </Button>
                </div>)}
        >
            <Head title="Home" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Card user={auth.user} posts={posts}/>
                    <Card user={auth.user} posts={posts}/>
                    <Card user={auth.user} posts={posts}/>
                    <Card user={auth.user} posts={posts}/>
                    <Card user={auth.user} posts={posts}/>
                    <Card user={auth.user} posts={posts}/>
                    <Card user={auth.user} posts={posts}/>
                </div>
            </div>

            <Modal 
                title="Create new blog" 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}
                width={800}
            >
                <Form
                    name="trigger"
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item
                        hasFeedback
                        label="Title"
                        name="title"
                        validateDebounce={1000}
                        rules={[
                            {
                                required: true,
                                message: "Title is required"
                            },
                            {
                                max: 255,
                                message: "Title must be within 255"
                            }
                        ]}
                    >
                        <Input placeholder="Enter blog title"/>
                    </Form.Item>
                    <Form.Item
                        className="min-h-[400px]"
                        hasFeedback
                        label="Content"
                        name="content"
                        validateDebounce={1000}
                        rules={[
                            {
                                required: true,
                                message: "Blog content is required"
                            }
                        ]}
                    >
                        <CKEditor
                            editor={ ClassicEditor }
                            data="<p>Hello from CKEditor&nbsp;5!</p>"
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor d="editor1"></div>is ready to use!', editor );
                            } }
                            onChange={ ( event ) => {
                                console.log( event );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                    </Form.Item>
                </Form>
            </Modal>

        </AuthenticatedLayout>
    );
}
