import Form from 'antd/lib/form'
import compose from 'recompose/compose'
import withLogin from './withLogin'

export default compose(Form.create(), withLogin)
