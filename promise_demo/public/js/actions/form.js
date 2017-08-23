import superagent from 'superagent'
import async from 'async'

export const onSubmitForm = userInfo => {
    //使用async
    // return function(dispatch) {
    //     async.waterfall([
    //         (done) => {
    //             superagent
    //                 .post('/userInfo')
    //                 .send(userInfo)
    //                 .end((err, res) => {
    //                     done(err, res.body)
    //                 });
    //         }
    //     ], (err, data) => {
    //         dispatch(submitFormAction(data))
    //     });
    // }
    //使用promise
    // return function (dispatch) {
    //     new Promise((resolve, reject) => {
    //         superagent
    //             .post('/userInfo')
    //             .send(userInfo)
    //             .end((err, res) => {
    //              if(err) {
    //                  return reject(err);
    //              } else {
    //                  return resolve(res.body)
    //              }
    //             })
    //     }).then((data) => {
    //         dispatch(submitFormAction(data));
    //     }).catch((err) => {
    //         return err;
    //     });
    // }
    // 使用async await
    return async (dispatch) => {
        const response = await superagent
            .post('/userInfo')
            .send(userInfo);
        const data = response.body;
        dispatch(submitFormAction(data))
    }
};

function submitFormAction(userInfo) {
    return {
        type: "USER_INFO",
        userInfo
    }
}