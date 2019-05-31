import React from 'react';

const Comment = () => {
    return (
        <div>
            <div className="p-4 p-10 flex justify-center">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">

                    {/* user */}
                    <div className="flex items-center pl-3 py-3">
                        <img className="w-10 h-10 rounded-full mr-4" src="https://v0.tailwindcss.com/img/jonathan.jpg"
                             alt="Avatar of Jonathan Reinink"/>
                        <div className="text-sm">
                            <p className="text-black leading-none">Jonathan Reinink</p>
                            <p className="text-grey-dark">Aug 18</p>
                        </div>
                    </div>
                    {/* user */}

                    <div className="px-6 py-4">

                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-grey-darker text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                            Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        </div>

                    {/* Alert */}
                    <div className="bp3-callout bp3-icon-info-sign bp3-intent-primary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
                    </div>
                    {/* Alert */}

                     {/*______________________________ Tag  _________________________*/}
                    <div className="px-6 py-4">
                    <span className="bp3-tag bp3-intent-primary bp3-minimal mr-2 bp3-round">
                        Crushed
                        <button className="bp3-tag-remove"></button>
                    </span>

                    <span className="bp3-tag bp3-intent-warning bp3-minimal mr-2 bp3-round">
                        Crushed
                        <button className="bp3-tag-remove"></button>
                    </span>

                    <span className="bp3-tag bp3-intent-success bp3-minimal mr-2 bp3-round">
                        Crushed
                        <button className="bp3-tag-remove"></button>
                    </span>

                    <span className="bp3-tag bp3-intent-danger bp3-minimal mr-2 bp3-round">
                        Crushed
                        <button className="bp3-tag-remove"></button>
                    </span>
                    </div>
                     {/*______________________________ Tag  _________________________*/}

                </div>
            </div>
        </div>
    );
};

export default Comment;