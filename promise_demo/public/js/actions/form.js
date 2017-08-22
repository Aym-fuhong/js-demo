import superagent from 'superagent'
import async from 'async'

export const onSubmitForm = userInfo => {
    console.log(userInfo, 'action userInfo===');
    return function(dispatch) {
        async.waterfall([
            (done) => {
                superagent
                    .post('/userInfo')
                    .send(userInfo)
                    .end((err, res) => {
                        done(err, res.body)
                    });
            }
        ], (err, data) => {
            dispatch(submitFormAction(data))
        });
    }
    // async.waterfall([
    //     (done) => {
    //         superagent
    //             .post('/userInfo')
    //             .send(userInfo)
    //             .end((err, res) => {
    //                 done(err, res.body)
    //             });
    //     }
    // ], (err, data) => {
    //     return (dispatch) => (dispatch(submitFormAction(data)))
    // });
};

 function submitFormAction(userInfo)  {
    return {
        type: "USER_INFO",
        userInfo
    }
}