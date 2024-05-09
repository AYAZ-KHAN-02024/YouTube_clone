import React, { useEffect, useState } from "react";
import { FetchApi } from "../utils/Api";
import LoadingBar from "./LoadingBar";

function VideoComment({ id }) {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        FetchApi(`commentThreads?part=snippet&videoId=${id}`)
            .then((commentThread) => {
                setComments(
                    commentThread?.data?.error?.code !== 403
                        ? commentThread.data.items
                        : "comment_not_allowed"
                );

            })
            .catch((error) => {
                console.log(error, "something wrong in api");
            });

        return () => {
            setComments(null);
        };
    }, [id]);

    if (!comments) {
        return <LoadingBar />;
    }
    return (
        <div className=" flex flex-col align-middle h-auto m-1 text-xs md:text-sm">
            {(comments && comments!=='comment_not_allowed') 
                  &&
                comments.map((val) => {
                    return (
                        <div
                            className="p-2 flex flex-col align-middle h-auto bg-indigo-400 shadow-sm shadow-slate-600 rounded-xl m-1"
                            key={val.id}
                        >
                            <div className=" m-1 flex flex-row align-middle">
                                <img
                                    src={
                                        val.snippet.topLevelComment.snippet.authorProfileImageUrl
                                    }
                                    alt="n/a"
                                    className=" rounded-full w-4 m-1"
                                />
                                <p className=" text-sm text-slate-900">
                                    {val.snippet.topLevelComment.snippet.authorDisplayName}
                                </p>
                            </div>

                            <p className="p-1 w-full  self-center rounded-md ">
                                {val.snippet.topLevelComment.snippet.textOriginal}
                            </p>

                            <div className="p-1 flex flex-row align-middle justify-between  m-1">
                                <div className=" flex flex-row align-middle ">
                                    <i className="fa-solid fa-thumbs-up  mr-1" />
                                    <p>{val.snippet.topLevelComment.snippet.likeCount}</p>
                                </div>

                                <p>
                                    {val.snippet.topLevelComment.snippet.publishedAt.substring(
                                        0,
                                        10
                                    )}
                                </p>
                            </div>
                        </div>
                    );
                })}

            {comments == "comment_not_allowed" && (
                <div className="p-2 flex flex-col align-middle h-auto bg-indigo-400 shadow-sm shadow-slate-600 rounded-xl m-1">
                    <div className=" m-1 flex flex-row align-middle">
                        <p className=" text-sm text-slate-900">COMMENTS NOT ALLOWED</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideoComment;
