import { Formik, Form, Field, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (text: string) => void;
}
interface FormikValues {
  text: string;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleSubmit = (
    values: { text: string },
    actions: FormikHelpers<FormikValues>
  ) => {
    actions.resetForm();
    values.text.length === 0
      ? toast.error("Please enter the word...")
      : toast.dismiss();
    onSearch(values.text.trim());
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <button>
            <IoSearchOutline className={css.icon} />
          </button>
          <Field
            className={css.input}
            type="text"
            name="text"
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
}
