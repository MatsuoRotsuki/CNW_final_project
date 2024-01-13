import { Link } from '@inertiajs/react';
import { MessageOutlined } from '@ant-design/icons';

export default function Card({ user, post }) {
    return (
        <Link
            className="flex flex-row items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md px-6 py-4 my-5 overflow-hidden hover:shadow-xl border-gray-200"
            href={route('profile.edit')}
        >
            <div class="mr-5 min-w-20 min-h-20">
                <img src={user.avatar_url} width={80} height={80} className="rounded-full"/>
            </div>
            <div class="flex flex-col justify-center items-start">
                <div class="flex space-x-6">
                    <div class="text-[#3DA9FC] font-bold">{user.name}</div>
                    <div class="text-gray-400">{'an hour ago'}</div>
                </div>
                <div class="flex justify-center items-center mx-1">
                    <div class="text-black font-medium text-2xl leading-7 text-left">{'Mọi người cho em hỏi học ngành Vật lí kỹ thuật sau này cần những kỹ năng gì để có việc làm ạ? anh chị nào review hộ em chương trình học ngành này với ạ...'}</div>
                </div>
                <div class="flex justify-start space-x-4">
                    <div class="flex items-center space-x-2 h-10">
                        <MessageOutlined style={{ fontSize: '16px', color: '#000' }} />
                        <div>4k</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}