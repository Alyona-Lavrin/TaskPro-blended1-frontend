import { SharedModal } from "../../../shared/SharedModal/SharedModal";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  ErrorSection,
  FormWrapper,
  ModalForm,
  Section,
} from "../../BoardModal/newBoardModal.styled";

import { TitleInput, AddColumnFormSubmitButton } from "./AddColumnModal.styled";
import { ButtonPlus } from "../../BoardModal/newBoardModal.styled";
import { PlusIcon } from "../../BoardModal/newBoardModal.styled";
import icons from "../../../shared/images/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentDashboard } from "../../../redux/Dashboard/dashboardsSelectors";
import { addColumnThunk } from "../../../redux/Dashboard/dashboardOperation";

const validationSchema = Yup.object().shape({
  title: Yup.string().min("1").required("specify a column name"),
});

export const AddColumnModal = ({ isModalOpen, modalStateSwapper }) => {
  const currentDashboard = useSelector(selectCurrentDashboard);

  const dispatch = useDispatch();
  const initialValues = {
    title: "",
  };

  const handleSubmit = ({ title }, action) => {
    const dashboardId = currentDashboard.result._id;
    dispatch(addColumnThunk({ dashboardId, title }));
    action.resetForm();
    modalStateSwapper();
  };

  return (
    <SharedModal
      modalIsOpen={isModalOpen}
      closeModal={modalStateSwapper}
      title={"Add column"}
      maxWidth="335px"
    >
      <Section>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <ModalForm>
            <FormWrapper>
              <TitleInput
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                autoComplete="off"
                autoFocus
              />
              <ErrorSection name="title" component="div" />
            </FormWrapper>

            <AddColumnFormSubmitButton type="submit">
              <ButtonPlus>
                <PlusIcon>
                  <use href={icons + "#icon-plus"} />
                </PlusIcon>
              </ButtonPlus>
              Add
            </AddColumnFormSubmitButton>
          </ModalForm>
        </Formik>
      </Section>
    </SharedModal>
  );
};
