class QuizBrain:
    def __init__(self, q_list):
        self.question_number = 0
        self.question_list = q_list
        self.score = 0

    def still_has_question(self):
        return self.question_number < len(self.question_list)

    def next_question(self):
        current_question = self.question_list[self.question_number]
        self.question_number += 1
        user_answer = input(f"q.{self.question_number}:{current_question.text}(t/f)")
        self.check_answer(user_answer, current_question.answer)

    def check_answer(self, user_answer, currect_answer):
        if user_answer.lower() == currect_answer.lower():
            print("right")
            self.score=+1

        else:
            print("wrong")
        print(f"the answer was {currect_answer}")
        print(f"current answer{self.score}/{self.question_numbert}")
