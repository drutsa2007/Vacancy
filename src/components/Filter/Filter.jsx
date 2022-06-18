import style from './Filter.module.css';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import {useForm} from 'react-hook-form';

const Filter = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <div>
        <Header/>
        <form onSubmit={handleSubmit(onSubmit)}>   
          <input {...register("email", { required: true, min: 5 })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input {...register("password")} />
          <select {...register("age")}>
            <option>asdasd</option>
            <option>asdasd</option>
            <option>asdasd</option>
          </select>
          <input type="submit" />
        </form>
    </div>
  );
}

export default Filter;