/* eslint-disable */
import db, { auth, provider, storage } from '../firebase'
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES, GET_ORDER } from './actionType';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload
})

export const setLoading = status => ({
    type: SET_LOADING_STATUS,
    status: status
})

export const getArticles = payload => ({
    type: GET_ARTICLES,
    payload: payload
})


export const signInAPI = () => {

    return (dispatch) => {
        signInWithPopup(auth, provider)
            .then((payload) => {
                dispatch(setUser(payload.user))
            })
            .catch((err) => alert(err.message))
    }
}

export const getUserAuth = () => {
    return (dispatch) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser(user))
            }
        })
    }
}

export const signOutAPI = () => {
    return (dispatch) => {
        signOut(auth).then(() => {
            dispatch(setUser(null))
        }).catch((error) => {
            console.log(error.message);
        });
    }
}

export const postArticleAPI = payload => {
    return (dispatch) => {
        dispatch(setLoading(true))
        if (payload.image !== '') {
            const storageRef = ref(storage, `images/${payload.image.name}`)
            const upload = uploadBytesResumable(storageRef, payload.image)
            // .put(payload.image)
            console.log(upload);
            upload.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log(`Progress: ${progress}%`);
                },
                (error) => console.log(error.code),
                () => {
                    // eslint-disable-next-line
                    getDownloadURL(upload.snapshot.ref).then((downloadURL) => {
                        console.log(downloadURL);
                        const url = async () => {
                            console.log('yes');
                            await addDoc(collection(db, 'articles'), {
                                actor: {
                                    description: payload.user.email,
                                    title: payload.user.displayName,
                                    // date: payload.user.timestamp,
                                    image: payload.user.photoURL
                                },
                                video: payload.video,
                                // eslint-disable-next-line
                                sharedImg: downloadURL,
                                comments: 0,
                                description: payload.description
                            })
                            dispatch(setLoading(false))
                        }
                        url()
                    })
                }
            )
        } else if (payload.video) {
            addDoc(collection(db, 'articles'), {
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    // date: payload.user.timestamp,
                    image: payload.user.photoURL
                },
                video: payload.video,
                // eslint-disable-next-line
                sharedImg: '',
                comments: 0,
                description: payload.description
            })
            dispatch(setLoading(false))
        }
    }
}

export const getArticlesAPI = () => {
    return (dispatch) => {
        let payload;
        const col = query(collection(db, 'catalog'), orderBy('name', 'asc'))
        onSnapshot(col, snapshot => {
            payload = snapshot.docs.map(doc => (
                {
                    data: doc.data(),
                    id: doc.id
                }
            ))
            // console.log(payload);
            dispatch(getArticles(payload))
        })
    }

}