import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import draftToHtml from 'draftjs-to-html';
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'wysiwyg';
import { addCar, editCar, getCar } from '../../store/car/car';
import { Language } from './../../lang/Languages';
import { fields } from './fields';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function AddCardForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { handleSubmit, register, setValue, reset } = useForm()

    const [content, setContent] = useState('')
    const [content1, setContent1] = useState('')

    const [file, setFile] = useState([])

    const { opisaniya, opisaniyaru, photo } = Language

    const handleFile = e => {
        setFile([...e.target.files])
    }

    let lang = localStorage.getItem('lang')

    const { car, code } = useSelector(state => state.car)

    useEffect(() => {
        if (!!code) navigate('/admin/cards')
    }, [code])

    useEffect(() => {
        if (!!car) {
            Object.keys(car).forEach(key => setValue(key, car[key]))
            setContent(
                EditorState.createWithContent(
                    ContentState.createFromBlockArray(convertFromHTML(car?.opisaniya ?? ''))
                )
            )
            setContent1(
                EditorState.createWithContent(
                    ContentState.createFromBlockArray(convertFromHTML(car?.opisaniyaru ?? ''))
                )
            )
        }
    }, [car])

    useEffect(() => {
        if (!!id) dispatch(getCar(id))
        else {
            reset()
            setContent('')
            setContent1('')
        }
    }, [id])

    const obSubmit = values => {
        const formData = new FormData()
        Object.keys(values).forEach(
            key =>
                key !== 'photo' &&
                key !== '_id' &&
                key !== '__v' &&
                key !== 'date' &&
                key !== 'opisaniya' &&
                key !== 'opisaniyaru' &&
                formData.append(key, values[key])
        )
        file.forEach(file => formData.append('photo', file))
        formData.append('opisaniya', draftToHtml(convertToRaw(content.getCurrentContent())))
        formData.append('opisaniyaru', draftToHtml(convertToRaw(content1.getCurrentContent())))

        if (!!id) dispatch(editCar(formData, id))
        else dispatch(addCar(formData))
    }

    return (
        <div className='content'>
            <form
                autoComplete='off'
                encType='multipart/form-data'
                className='el_form page_form'
                onSubmit={handleSubmit(obSubmit)}
            >
                <div className='container-fluid'>
                    <div className='page-title-box'>
                        <div className='row align-items-center'>
                            <div className='col-sm-6'>
                                <h4>Yangi Avtomobil qo'shish</h4>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card-avto'>
                                <div className='card-avto-body'>
                                    <h4 className='mt-0 header-title'>Yangi Avtomobil qo'shish</h4>
                                    {fields.map((field, index) => (
                                        <div className='form-group row' key={index}>
                                            <label
                                                htmlFor='example-text-input'
                                                className='col-sm-2 col-form-label'
                                            >
                                                {field.label[lang]}
                                            </label>
                                            <div className='col-sm-5'>
                                                {!!field.select ? (
                                                    <select
                                                        className='main_selector form-control'
                                                        {...register(field.key, {
                                                            required:
                                                                field.key === 'aksiya'
                                                                    ? false
                                                                    : true,
                                                        })}
                                                    >
                                                        {field?.select?.map((select, index1) =>
                                                            !!select.label ? (
                                                                <optgroup
                                                                    label={select.label}
                                                                    key={index1}
                                                                >
                                                                    {select?.optgroup?.map(
                                                                        (opt, index2) => (
                                                                            <option
                                                                                value={opt.value}
                                                                                key={index2}
                                                                            >
                                                                                {opt.name}
                                                                            </option>
                                                                        )
                                                                    )}
                                                                </optgroup>
                                                            ) : (
                                                                <option
                                                                    value={select.value}
                                                                    key={index1}
                                                                >
                                                                    {select.name}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                ) : (
                                                    <input
                                                        type={field.type}
                                                        className='form-control page_title_uz'
                                                        {...register(field.key, {
                                                            required: true,
                                                            onChange: e => {
                                                                let num = Number(e.target.value)
                                                                    .toLocaleString()
                                                                    .replace(/,/g, ' ')

                                                                console.log(num)
                                                                return num
                                                            },
                                                        })}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    <div className='pageBody' style={{ display: 'flex' }}>
                                        <label className='col-sm-2 col-form-label'>
                                            {opisaniyaru[lang]}
                                        </label>
                                        <textarea editorState={content1}
                                            onEditorStateChange={e => setContent(e)}
                                            wrapperClassName='demo-wrapper'
                                            ClassName='demo-editor'
                                            placeholder='Подробнее об автомобиле' />
                                        {/* <Editor
                                            editorState={content}
                                            onEditorStateChange={e => setContent(e)}
                                            wrapperClassName='demo-wrapper'
                                            editorClassName='demo-editor'
                                            placeholder='Content'
                                        /> */}
                                    </div>
                                    <div className='pageBody' style={{ display: 'flex' }}>
                                        <label className='col-sm-2 col-form-label'>
                                            {opisaniya[lang]}
                                        </label>
                                        <textarea editorState={content1}
                                            onEditorStateChange={e => setContent(e)}
                                            wrapperClassName='demo-wrapper'
                                            ClassName='demo-editor'
                                            placeholder='Подробнее об автомобиле' />
                                        {/* <Editor
                                            editorState={content1}
                                            onEditorStateChange={e => setContent1(e)}
                                            wrapperClassName='demo-wrapper'
                                            editorClassName='demo-editor'
                                            placeholder='Content'
                                        /> */}
                                    </div>
                                    <div className='m-5'>
                                        <div className='download'>
                                            <p>{photo[lang]}</p>
                                        </div>
                                        <div className='max_size'>
                                            <p>Max:10mb</p>
                                        </div>
                                        <div className='upload_button_3'>
                                            <form
                                                action='/profile'
                                                method='post'
                                                multiple='multiple'
                                            >
                                                <input
                                                    onChange={event => handleFile(event)}
                                                    type='file'
                                                    name='files'
                                                    multiple
                                                />
                                            </form>
                                        </div>
                                        <div className='btn-admin'>
                                            <a
                                                href='/admin/cards'
                                                className='button_sumbit_news btn btn-dark btn-sm float-right ml-3'
                                            >
                                                Orqaga
                                            </a>
                                            <input
                                                type='submit'
                                                className='button_sumbit_news btn btn-success btn-sm float-right ml-3'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddCardForm
