import { DeepValuePipe } from './deep-value.pipe';

describe('DeepValuePipe', () => {
  it('create an instance', () => {
    const pipe = new DeepValuePipe();
    expect(pipe).toBeTruthy();
  });
});
