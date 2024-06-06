type Props = {}
const NotificationPage = (props: Props) => {
    return (
        <section className="bg-[#F9FAFE] h-[100vh] w-[80vw]">
            <div className="bg-[#FFFFFF] w-[50vw] h-[90vh] mx-auto mt-10 rounded-xl">
                <div className="flex flex-row items-center justify-between text-black mx-6 py-6">
                    <h3 className="font-bold text-[24px] leading-2 tracking-wider">Notifications <span className="bg-[#002A79] px-2 text-white rounded-sm">3</span></h3>
                    <p>Mark all as read</p>
                </div>

            </div>
        </section>
    )
}
export default NotificationPage