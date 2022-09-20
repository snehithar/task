import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash'
import { saveAnswer } from '../service/db';
import { reset, setData } from '../redux/actions/questionAction';

const useQuestion = (form, quesions, id) => {
  const dispatch = useDispatch()
  const store = useSelector(st => st.question)
  const [theEnd, setTheEnd] = useState(null);
  const [index, setIndex] = useState(0)
  const [building, setBuilding] = useState(true)
  const [loading, setLoading] = useState(false)
  const [module, setModule] = useState(quesions[index])

  useEffect(() => {
    setBuilding(true)
    dispatch(reset())
  }, [])

  const save = async (flag) => {
    setLoading(true)
    const data = { ...store, id }
    await saveAnswer(data)
    dispatch(reset())
    setTheEnd(flag)
    setLoading(false)
  }
  useEffect(() => {
    if (!building) {
      let md = quesions[index]
      if (!md) {
        save(true)
        return
      }
      if (md.skip && md.skip(store)) {
        next()
      } else {
        setModule(md)
        form.resetFields();
      }
    }
  }, [index, building])

  const next = () => {
    setIndex(index + 1)
  }

  const handleFinish = (evt) => {
    let key = _.camelCase(module.screen)
    let value = evt[key]
    value = module.beforeSubmit ? module.beforeSubmit(value) : value
    setModule({ ...module, value })
    dispatch(setData({ [key]: value }))
  }

  useEffect(() => {
    if (!_.isEmpty(store)) {
      if (!building) {
        async function afterSubmit() {
          if (module.afterSubmit && module.afterSubmit(module.value)) {
            save(false)
          } else {
            next()
          }
        }
        afterSubmit();
      }
    } else {
      setBuilding(false)
    }
  }, [store])

  return { theEnd, module, loading, handleFinish, building };
};

export default useQuestion;
