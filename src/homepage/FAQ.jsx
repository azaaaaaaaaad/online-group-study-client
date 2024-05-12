

const FAQ = () => {
    return (
        <div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    What is online group study?
                </div>
                <div className="collapse-content">
                    <p>Online group study is a collaborative learning approach where individuals come together virtually using various online platforms to study and review course materials, discuss concepts, and work on assignments or projects as a group.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What are the benefits of online group study?
                </div>
                <div className="collapse-content">
                    <ul>
                        <li>Collaboration: Allows for collaborative learning and sharing of diverse perspectives.</li>
                        <li>Accountability: Encourages accountability among group members to stay focused and motivated.</li>
                        <li>Comprehension: Enhances understanding through discussions and explanations among peers.</li>
                        <li>Efficiency: Can lead to more efficient study sessions by leveraging collective knowledge and resources.</li>
                    </ul>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    How can I find or create an online study group?
                </div>
                <div className="collapse-content">
                    <ul>
                        <li>Establish clear communication channels and schedules.</li>
                        <li>Set specific goals and objectives for each study session.</li>
                        <li>Divide tasks and responsibilities among group members.</li>
                        <li>Encourage active participation and engagement from all members.</li>
                        <li>Utilize online tools for collaboration, note-taking, and document sharing.</li>
                        <li>Provide constructive feedback and support to group members</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default FAQ;