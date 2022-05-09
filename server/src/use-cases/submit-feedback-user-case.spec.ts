import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// função espia que ve se as funções foram chamadas
const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  {create: createFeedbackSpy}, 
  {sendMail: sendMailSpy}
)

// describe define um conjunto de testes
describe('Submite feedback', () =>{
  it('should be able to submit a feedback', async ()=>{
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Exemple comment',
      screenshot: 'data:image/png;base64,872143jwer734kjwsef',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });


  it('should not be able to submit a feedback without type', async ()=>{

    await expect(submitFeedback.execute({
      type: '',
      comment: 'Exemple comment',
      screenshot: 'data:image/png;base64,872143jwer734kjwsef',
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback without comment', async ()=>{

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,872143jwer734kjwsef',
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback with a invalid screenshot', async ()=>{

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Exemple comment',
      screenshot: 'test.jpg',
    })).rejects.toThrow();
  });
});


























/* teste unitario
test('sum 2 + 2',()=>{
  expect(2+2).toBe(4)
});

  pra rodar 
    npm run test
*/

