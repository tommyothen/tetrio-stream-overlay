import React from 'react';
import { NextRouter } from 'next/router';

export class UserSearch extends React.Component<{router: NextRouter}, { value: string }> {
  private router: NextRouter;

  constructor(props: {router: NextRouter}) {
    super(props);
    this.state = { value: '' };
    this.router = props.router;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    this.router.push({
      pathname: `/user/${this.state.value.toLowerCase()}`,
    })
    event.preventDefault();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          width: '60%',
          fontSize: '1.5rem',
          fontFamily: 'C',
        }}
      >
        <input
          type="text"
          autoComplete="off"
          data-lpignore="true"
          value={this.state.value}
          name="username"
          placeholder="Username"
          onChange={this.handleChange}
          style={{
            width: '100%',
            fontSize: '1.5rem',
            fontFamily: 'C',
          }}
        />
      </form>
    );
  }
}
